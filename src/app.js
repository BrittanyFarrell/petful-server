/* eslint-disable strict */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const {NODE_ENV, CLIENT_ORIGIN} = require('../config');
const petsRouter = require('./pets/pets-router');
const peopleRouter = require('./people/people-router');

const app = express();

app.use(morgan((NODE_ENV === 'production') ? 'tiny' : 'common', {
  skip: () => NODE_ENV === 'test',
}));
app.use(helmet());
app.use(cors({
  origin: CLIENT_ORIGIN
}));

app.use('/api', petsRouter);
app.use('/api/people', peopleRouter);

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: 'Server error' };
  } else {
    console.error(error);
    response = { error: error.message, object: error };
  }
  res.status(500).json(response);
});

app.get('/', (req, res, next) => {
  res.send('please work...');
});

module.exports = app;