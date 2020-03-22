require('dotenv').config();

var express = require('express');
var http = require('http');

var createError = require('http-errors');
var errorHandler = require('errorhandler');
// var config = require('./config');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var log = require('./libs/log')(module);
var router = express.Router();

// var mongoose = require('mongoose');
// var db = require('./libs/mongoose');

var app = express();

// engine setup configure
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);
// app.set('port', process.env.port || config.get('port'));


// require('./routes')(app);


// if (app.get('env') === 'development') {
//   app.use(logger(':method :url :status :response-time ms'));
//   app.use(errorHandler({ dumpExceptions: true, showStack: true }));
// };

// if (app.get('env') === 'production') {
//   app.use(logger());
//   app.use(errorHandler); 
// };

// if (app.get('env') === 'test') {
//   app.use(errorHandler({ dumpExceptions: true, showStack: true }));
// };

//create server
// var server = http.createServer(app).listen(app.get('port'), function(){
//   log.info('-> Express server listening on port ' + config.get('port'));
// });


var server = http.createServer(app).listen(3000, function(){
  console.log('-> Express server listening on port 3000');
});

module.exports = server;
