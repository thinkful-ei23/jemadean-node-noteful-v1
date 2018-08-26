'use strict';

const express = require('express');
const morgan = require('morgan');

const { PORT } = require('./config');
const notesRouter = require('./router/notes.router');

console.log('Hello Noteful!');

// INSERT EXPRESS APP CODE HERE...
const app = express();

app.use(morgan('dev'));

app.use(express.static('public'));
app.use(express.json());

app.use('/api', notesRouter);

app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status  = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

app.listen(PORT, function () {
  console.info(`Server listening on ${this.address().port}`);
}).on('error', err => {
  console.error(err);
});