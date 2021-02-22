/* eslint-disable strict */
const Queue = require('./Queue');
const {peopleArr, dogsArr, catsArr} = require('../../store');

const pets = {
  cats: new Queue(),
  dogs: new Queue()
};
  
catsArr.forEach(cat => pets.cats.enqueue(cat));
dogsArr.forEach(dog => pets.dogs.enqueue(dog));

const people = new Queue();
[
  'Randy Lahey',
  'Trevor Cory',
  'Jim Lahey'
].forEach(person => people.enqueue(person));

module.exports = {
  people,
  pets
};