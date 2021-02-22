/* eslint-disable strict */
const {people, pets} = require('../queue/data');

// Set up initial data.
// --------------------

// --------------------

module.exports = {

  getCat() {
    return pets.cats.show();
  },

  getDog() {
    return pets.dogs.show();
  },

  dequeue(type) { 
    let removed = type === 'cats' ? pets.cats.dequeue() : pets.dogs.dequeue();

    return removed;
  },

  personDequeue() {
    return people.dequeue();
  }
};