/* eslint-disable strict */
const {people, pets} = require('../queue/data');
// Set up initial data.
// --------------------

// --------------------

module.exports = {
  
  get() {
    console.log('fetching people...');
    return people.all(people.first);
  },

  personEnqueue(person) {
    const inLine = people.enqueue(person);
    people.enqueue('Harding Summers');
    people.enqueue('Reese Garrard');
    people.enqueue('America Blakeley');
    people.enqueue('Maynard Knaggs');
    people.enqueue('Norman Baines');
    people.enqueue('June Jerome');
    people.enqueue('Kenneth Rowbottom');
    people.enqueue('Opal Sackville');

    return inLine;
  },

  personDequeue() {
    return people.dequeue();
  }
};