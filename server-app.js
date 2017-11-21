const express = require('express');
const request = require('request');
const proxy = require('express-http-proxy');
const bodyParser = require('body-parser');
const cors = require('cors');

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

module.exports = app;
