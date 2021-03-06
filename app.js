var express = require('express');
var path = require('path');
var logger = require('morgan');
var index = require('./routes/index');
var contact = require('./routes/contact');
var db = require("./database.js");
const bodyParser = require('body-parser');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set path for static assets
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// routes
app.use('/contato', contact);
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('e404', {page:'404 - Página Não Encontrada', menuId:'e404'});
  /*var err = new Error('Ops, página não encontrada!');
  err.status = 404;
  next(err);*/
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.render('error', {status:err.status, message:err.message});
});

module.exports = app;