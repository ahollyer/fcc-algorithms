/* Implementing a tree structure with insert method */

class Node {
  constructor(data) {
    this.left
    this.right
    this.data = data;
  }

  insert(value) {
    if(value <= this.left) { // insert to the left of the root node
      if(this.left == null) {
        this.left = new Node(value);
      } else {
        this.left.insert(value);
      }
    } else { // insert to the right of the root node
      if(this.right == null) {
        this.right = new Node(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(value) {
    if(value == this.data) {
      return true;
    } else if(value < this.data) {
      if(this.left == null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else { // if value > data
      if(this.right == null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
  }

  // In-Order Traversal
  printInOrder() {
    if(this.left != null) {
      this.left.printInOrder()
    }
    console.log(this.data);
    if(this.right != null) {
      this.right.printInOrder();
    }
  }

  // Pre-Order Traversal (root first)
  printPreOrder() {
    console.log(data);
    if(this.left != null) {
      this.left.printPreOrder();
    }
    if(this.right != null) {
      this.right.printPreOrder();
    }
  }

  // Post-Order Traversal (root last)
  printPostOrder() {
    if(this.left != null) {
      this.left.printPostOrder();
    }
    if(this.right != null) {
      this.right.printPostOrder();
    }
    console.log(this.data);
  }
}
