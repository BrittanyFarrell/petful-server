/* eslint-disable strict */
const { allowedNodeEnvironmentFlags } = require('process');
const _Node = require('./Node.js');

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    this.last= node;

    return node.value;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }

  show() {
    if (this.first === null) {
      return;
    }

    return this.first.value;
  }

  all(node) {
    const currNode = node;
    if (currNode === null) {
      return;
    }

    const value = [currNode.value];
    const arr = this.all(currNode.next);
    return value.concat(arr);
  }
}

module.exports = Queue;
