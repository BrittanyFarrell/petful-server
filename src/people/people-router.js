/* eslint-disable strict */
const express = require('express');
const json = require('body-parser').json();

const { get, personEnqueue, personDequeue } = require('../people/people-service');

const peopleRouter = express.Router();

peopleRouter
  .route('/')
  .get((req, res) => {
    res.status(200).send(get());
  })
  .post(json, (req, res) => {
    const { person } = req.body;


    if (!person) {
      res.status(400).json({error: 'A name is required to check in for adoption.'});
    }

    res.status(201).send(personEnqueue(person));
  });

module.exports = peopleRouter;