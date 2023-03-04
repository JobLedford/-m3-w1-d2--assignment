var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./routes/index');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended:true }));
app.use('/', routes);

module.exports = app;