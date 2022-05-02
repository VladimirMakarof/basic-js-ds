const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeRoot = null
  }

  root() {
    return this.treeRoot
  }

  add(data) {
    let elem = this.treeRoot
    if (!elem) {
      this.treeRoot = new Node(data)
      return;
    } else {
      const searchPlace = function (elem) {
        if (data < elem.data) {
          if (!elem.left) {
            elem.left = new Node(data)
            return
          } else {
            return searchPlace(elem.left)
          }
        } else if (data > elem.data) {
          if (!elem.right) {
            elem.right = new Node(data);
            return;
          } else {
            return searchPlace(elem.right)
          }
        }
      }
      return searchPlace(elem)
    }
  }

  has(data) {
    let elem = this.treeRoot;
    while (elem) {
      if (data === elem.data) {
        return true
      }
      if (data > elem.data) {
        elem = elem.right
      } else {
        elem = elem.left
      }
    }
    return false
  }

  find(data) {
    let elem = this.treeRoot;
    while (elem.data !== data) {
      if (data > elem.data) {
        elem = elem.right
      } else {
        elem = elem.left
      }
      if (!elem) return null
    }
    return elem
  }

  remove(data) {
    let elem = this.treeRoot;
    const removeElem = function (elem, data) {
      if (!elem) {
        return null
      }
      if (data === elem.data) {
        if (!elem.left && !elem.right) return null
        if (!elem.right) return elem.left
        if (!elem.left) return elem.right

        ///Оба ребенка есть
        let newElem = elem.right

        while (newElem.left) {
          ///Ищем меньший среди больших
          newElem = newElem.left
        }
        elem.data = newElem.data
        elem.right = removeElem(elem.right, newElem.data)
        return elem
      } else if (data < elem.data) {
        elem.left = removeElem(elem.left, data)
        return elem
      } else {
        elem.right = removeElem(elem.right, data)
        return elem
      }
    }
    elem = removeElem(elem, data)
  }

  min() {
    let elem = this.treeRoot;
    while (elem.left) {
      elem = elem.left
    }
    return elem.data
  }

  max() {
    let elem = this.treeRoot;
    while (elem.right) {
      elem = elem.right
    }
    return elem.data
  }
}

module.exports = {
  BinarySearchTree
};