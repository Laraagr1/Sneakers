var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const port = 7000

var autenticarRouter = require('./routes/autenticar');
var createRouter = require('./routes/create');
var basqueteRouter = require('./routes/basquete');
var cadastroRouter = require('./routes/cadastro');
var corridaRouter = require('./routes/corrida');
var futebolRouter = require('./routes/futebol');
var loginRouter = require('./routes/login');
var lojaRouter = require('./routes/loja');
var produtoRouter = require('./routes/produto');
var skateRouter = require('./routes/skate');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/create', createRouter);
app.use('/autenticar', autenticarRouter);
app.use('/basquete', basqueteRouter);
app.use('/cadastro', cadastroRouter);
app.use('/corrida', corridaRouter);
app.use('/futebol', futebolRouter);
app.use('/login', loginRouter);
app.use('/', lojaRouter);
app.use('/produto', produtoRouter);
app.use('/skate', skateRouter);

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
app.listen(7000, () => {
    console.log("rodando")
})