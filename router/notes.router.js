'use strict';

const express = require('express');
const router = express.Router();

const data = require('../db/notes');

router.get('/notes', (req, res) => {
  const searchTerm = req.query.searchTerm;
  let filteredData = data;
  if (searchTerm) {
    filteredData = filteredData.filter(item => JSON.stringify(item).includes(searchTerm));
  }
  res.json(filteredData);
});

router.get('/notes/:id', (req, res) => {
  const id = req.params.id;
  const filteredData = data.find(item => item.id === Number(id));
  res.json(filteredData);
});

module.exports = router;