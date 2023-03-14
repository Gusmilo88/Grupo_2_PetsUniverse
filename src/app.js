const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride =  require("method-override");
const session = require('express-session'); // Para poder usar los métodos PUT y DELETE



const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const ProductRouter = require('./routes/product');
const localsUsercheck = require('./middlewares/localsUsercheck');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "..", 'public')));
app.use(methodOverride("_method"));// Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(session({
  secret : "PetsUniverse",
  resave : false,
  saveUninitialized : true
}))
app.use(localsUsercheck)

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', ProductRouter);

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
