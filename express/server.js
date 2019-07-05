'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
var http = require("http");


const router = express.Router();
router.get('/', (req, res) => {
  var sourceImage = "data:image/png;base64,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";
var mimeTypeSuffixLength = 22; // "data:image/png;base64,"
var buffer = new Buffer(sourceImage.substr(mimeTypeSuffixLength), "base64");
  res.writeHead(200, {
    "Content-Type": "image/png"
  });
  res.write(buffer, "binary");
  res.end();
});
router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.post('/', (req, res) => res.json({ postBody: req.body }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/.netlify/functions/server.png', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);