const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.elements = null;
  }

  getUnderlyingList() {
    return this.elements
  }

  enqueue(value) {
    const node = this.elements;
    if (node === null) {
      this.elements = new ListNode(value);
      return;
    } else {
      const nextNode = (node) => {
        if (node.next === null) {
          node.next = new ListNode(value);
          return;
        } else {
          return nextNode(node.next);
        }
      }
      return nextNode(node);
    }
  }

  dequeue() {
    let data = this.elements.value;
    this.elements = this.elements.next;
    return data;
  }
}

module.exports = {
  Queue
};