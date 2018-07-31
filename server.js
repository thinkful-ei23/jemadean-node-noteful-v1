'use strict';

// Load array of notes
const express = require('express');

const data = require('./db/notes');

const morgan = require('morgan');

const app = express();

console.log('Hello Noteful!');

// INSERT EXPRESS APP CODE HERE...

app.use(morgan('dev'));

app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
  const searchTerm = req.query.searchTerm;
  let filteredData = data;
  if (searchTerm) {
    filteredData = filteredData.filter(item => JSON.stringify(item).includes(searchTerm));
  }
  res.json(filteredData);
});

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const filteredData = data.find(item => item.id === Number(id));
  res.json(filteredData);
});

app.listen(8080, function () {
  console.info(`Server listening on ${this.address().port}`);
}).on('error', err => {
  console.error(err);
});