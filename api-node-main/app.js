// Middlewares 1

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// Création de la dépendance de la route
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var formationRouter = require('./routes/formation');
var moduleRouter = require('./routes/module');
var activiteRouter = require('./routes/activite');
var salarieRouter = require('./routes/salarie');
var promoRouter = require('./routes/promo');
var noteRouter = require('./routes/note');
var stagiaireRouter = require('./routes/stagiaire');
var entrepriseRouter = require('./routes/entreprise');
var offreRouter = require('./routes/offre');
var evenementRouter = require('./routes/evenement');


// Middlewares 2
var mongoose = require('mongoose');

var app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());


// Connect to MongoDB
const dbURI = 'mongodb+srv://root:root@formenscopproject.v3xfv.mongodb.net/FORMENSCOPproject?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true })

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Activation des routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/formation', formationRouter);
app.use('/module', moduleRouter);
app.use('/activite', activiteRouter);
app.use('/salarie', salarieRouter);
app.use('/promo', promoRouter);
app.use('/note', noteRouter);
app.use('/stagiaire', stagiaireRouter);
app.use('/entreprise', entrepriseRouter);
app.use('/offre', offreRouter);
app.use('/evenement', evenementRouter);

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
