var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var galeriaRouter = require('./routes/galeria');
var bookofbobafettRouter = require('./routes/bookofbobafett');
var clonewarsRouter = require('./routes/clonewars');
var contactoRouter = require('./routes/contacto');
var datosRouter = require('./routes/datos');
var episodioiRouter = require('./routes/episodioi');
var episodioiiRouter = require('./routes/episodioii');
var episodioiiiRouter = require('./routes/episodioiii');
var episodioivRouter = require('./routes/episodioiv');
var episodiovRouter = require('./routes/episodiov');
var episodioviRouter = require('./routes/episodiovi');
var episodioviiRouter = require('./routes/episodiovii');
var episodioviiiRouter = require('./routes/episodioviii');
var episodioixRouter = require('./routes/episodioix');
var personajesRouter = require('./routes/personajes');
var rebelsRouter = require('./routes/rebels');
var themandalorianRouter = require('./routes/themandalorian');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/galeria', galeriaRouter);
app.use('/bookofbobafett', bookofbobafettRouter);
app.use('/clonewars', clonewarsRouter);
app.use('/contacto', contactoRouter);
app.use('/datos', datosRouter);
app.use('/episodioi', episodioiRouter);
app.use('/episodioii', episodioiiRouter);
app.use('/episodioiii', episodioiiiRouter);
app.use('/episodioiv', episodioivRouter);
app.use('/episodiov', episodiovRouter);
app.use('/episodiovi', episodioviRouter);
app.use('/episodiovii', episodioviiRouter);
app.use('/episodioviii', episodioviiiRouter);
app.use('/episodioix', episodioixRouter);
app.use('/personajes', personajesRouter);
app.use('/rebels', rebelsRouter);
app.use('/themandalorian', themandalorianRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
