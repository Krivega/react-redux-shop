const express = require('express');
const request = require('request');
const proxy = require('express-http-proxy');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const Datastore = require('nedb');
const sendEmail = require('./mailer');

const { mailer: isEnabledMailer } = require('./server.config');

const app = express();
const db = new Datastore({ filename: 'orders.json', autoload: true });

app.use(cors());
app.use(bodyParser.json());

app.use(
  '/api/getCities',
  proxy('http://api.cdek.ru', {
    proxyReqPathResolver: req => `/city/getListByTerm/jsonp.php${req.url}`
  })
);

function parseDate(date) {
  const options = {
    // era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    // timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  return date.toLocaleString('ru', options);
}

app.post('/api/checkout/', ({ body: { cart, address: { name, phone, email, street } } }, res) => {
  db.find({}, function(err, docs = []) {
    cart = JSON.stringify(cart);
    const numberOrder = docs.length + 1;
    const date = new Date();
    const parsedDate = parseDate(date);

    db.insert({
      numberOrder,
      date,
      parsedDate,
      name,
      phone,
      email,
      street,
      cart
    });

    if (isEnabledMailer) {
      sendEmail({
        title: `New Order #${numberOrder}`,
        emailData: { date: parsedDate, name, phone, email, street, cart }
      });
    }
  });

  return res.send(JSON.stringify({ name, phone, email, street }));
});

// Serve static assets
app.use(express.static(path.resolve(__dirname, './', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './', 'build', 'index.html'));
});

module.exports = app;
