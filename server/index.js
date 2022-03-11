var express = require('express');
var path = require('path');
var logger = require('morgan');

var indexRouter = require('./routes/route');
var usersRouter = require('./routes/users');

var app = express();
// middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(8000, (req, res, next) => {
  console.log('listening on port 8000');
});

module.exports = app;
