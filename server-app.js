const express = require('express');
const request = require('request');
const proxy = require('express-http-proxy');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(
  '/api/getCities',
  proxy('http://api.cdek.ru', {
    proxyReqPathResolver: req => `/city/getListByTerm/jsonp.php${req.url}`
  })
);

app.post('/api/checkout/', (req, res) => {
  return res.send(JSON.stringify(req.body));
});

// Serve static assets
app.use(express.static(path.resolve(__dirname, './', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './', 'build', 'index.html'));
});

module.exports = app;
