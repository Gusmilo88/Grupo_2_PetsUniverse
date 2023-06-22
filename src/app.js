require('dotenv').config()

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride =  require("method-override");
const session = require('express-session'); // Para poder usar los métodos PUT y DELETE
const passport = require("passport")
const { loginGoogleInitialize } = require('./services/googleServices');




const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require("./routes/auth")
const ProductRouter = require('./routes/product');
const cookieCheck = require("./middlewares/cookieCheck")
const localsUsercheck = require('./middlewares/localsUsercheck');


const app = express();
loginGoogleInitialize(); /* Esto sirve para que empieze a funciona la funcion que amrmamos en la carpeta googleServices.js */

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
  secret : "userPetsUniverse",
  resave : false,
  saveUninitialized : true
}))
app.use(cookieCheck)/* aca cargo en session lo que esta en la cookie */
app.use(localsUsercheck)/* aca cargo en locals lo que hay en sessions */
app.use(passport.initialize())
app.use(passport.session())


/* Rutas */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', ProductRouter);
app.use("/auth", authRouter)


/* Apis */
app.use('/api/products',require('./routes/api/productsApi'));
app.use("/api/users", require("./routes/api/usersApi"));
app.use("/api/cart", require("./routes/api/cartApi"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(/* createError(404) */ res.render('juego404'));
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

/* ... */