'use strict';

const data = require('../db/notes');
const simDB = require('../db/simDB');
const notes = simDB.initialize(data);

// GET Notes with search
notes.filter('gaga', (err, list) => {
  if (err) {
    console.error(err);
  }
  console.log(list);
});

// GET Notes by ID
notes.find(1002, (err, item) => {
  if (err) {
    console.error(err);
  }
  if (item) {
    console.log(item);
  } else {
    console.log('not found');
  }
});

// PUT (Update) Notes by ID
const updateObj = {
  title: 'New Title',
  content: 'Blah blah blah'
};

notes.update(1005, updateObj, (err, item) => {
  if (err) {
    console.error(err);
  }
  if (item) {
    console.log(item);
  } else {
    console.log('not found');
  }
});

//Create a new note
const newObj = {
  title: 'The only one about dogs',
  content: 'The only one in English'
};

notes.create(newObj, (err, item) => {
  if (err) {
    console.error(err);
  }
  if (item) {
    console.log(item);
  } else {
    console.log('error-cannot create item');
  }
});

//Delete new note
notes.delete(1010,(err, item) => {
  if (err) {
    console.error(err);
  }
  if (item) {
    console.log(`Item 1010 deleted`);
  } else {
    console.log('error-cannot delete item');
  }
});
