const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');


const runMiddleware = function(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use( express.static(path.join(__dirname, '../', 'client')) );
};


module.exports = {runMiddleware};