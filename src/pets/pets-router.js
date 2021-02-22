/* eslint-disable strict */
const express = require('express');
const json = require('body-parser').json();

const { getCat, getDog, dequeue, personDequeue } = require('./pets-service');
const petsRouter = express.Router();

petsRouter
  .get('/cat', (req, res, next) => {
    res.send(getCat());
  });

petsRouter
  .delete('/cat', json, (req, res) => {
    let human = personDequeue();
  
    if (!human) {
      res.status(404).json({error: 'Pet must be adopted by a person'});
    }
  
    let animal = dequeue('cats');
    res.send({human, animal});
  }); 

petsRouter
  .get('/dog', (req, res, next) => {
    res.send(getDog());
  });

petsRouter
  .delete('/dog', json, (req, res) => {
    let human = personDequeue();
    
    if (!human) {
      res.status(404).json({error: 'Pet must be adopted by a person'});
    }
    
    let animal = dequeue('dogs');
    res.send({human, animal});
  }); 
 
module.exports = petsRouter;