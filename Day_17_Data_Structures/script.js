//Data sturctures

// link list-----------------------------------------------------------------
// 1.
class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  // Example usage:
  const firstNode = new Node(1);
  const secondNode = new Node(2);
  firstNode.next = secondNode;
  
  console.log(firstNode); // Output: Node { value: 1, next: Node { value: 2, next: null } }
  console.log(secondNode); // Output: Node { value: 2, next: null }
  
//  2.
class Node1 {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Method to add a node to the end
    add(value) {
      const newNode = new Node1(value);
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    // Method to remove a node from the end
    remove() {
      if (this.head === null) {
        console.log("List is empty");
        return;
      }
  
      if (this.head.next === null) {
        this.head = null;
      } else {
        let current = this.head;
        let previous = null;
        while (current.next !== null) {
          previous = current;
          current = current.next;
        }
        previous.next = null;
      }
    }
  
    // Method to display all nodes
    display() {
      if (this.head === null) {
        console.log("List is empty");
        return;
      }
  
      let current = this.head;
      while (current !== null) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
  
  // Example usage:
  const list = new LinkedList();
  list.add(1);
  list.add(2);
  list.add(3);
  
  console.log("List after adding nodes:");
  list.display();
  
  list.remove();
  console.log("List after removing a node:");
  list.display();
  


// stack--------------------------------------------------------------------
// 3.
class Stack {
    constructor() {
      this.items = [];
    }
  
    // Method to add an element to the stack
    push(element) {
      this.items.push(element);
    }
  
    // Method to remove an element from the stack
    pop() {
      if (this.isEmpty()) {
        console.log("Stack is empty");
        return null;
      }
      return this.items.pop();
    }
  
    // Method to view the top element of the stack
    peek() {
      if (this.isEmpty()) {
        console.log("Stack is empty");
        return null;
      }
      return this.items[this.items.length - 1];
    }
  
    // Method to check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Method to display all elements in the stack
    display() {
      if (this.isEmpty()) {
        console.log("Stack is empty");
      } else {
        console.log(this.items.join(', '));
      }
    }
  }
  
  // Example usage:
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  
  console.log("Stack after pushing elements:");
  stack.display();
  
  console.log("Top element is:", stack.peek());
  
  stack.pop();
  console.log("Stack after popping an element:");
  stack.display();
  
  console.log("Top element is:", stack.peek());
  


// 4.
class Stack1{
    constructor() {
      this.items = [];
    }
  
    // Method to add an element to the stack
    push(element) {
      this.items.push(element);
    }
  
    // Method to remove an element from the stack
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.pop();
    }
  
    // Method to view the top element of the stack
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[this.items.length - 1];
    }
  
    // Method to check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Method to display all elements in the stack
    display() {
      if (this.isEmpty()) {
        console.log("Stack is empty");
      } else {
        console.log(this.items.join(', '));
      }
    }
  }
  
  // Function to reverse a string using the Stack class
  function reverseString(str) {
    const stack = new Stack1();
  
    // Push all characters of the string onto the stack
    for (let char of str) {
      stack.push(char);
    }
  
    // Pop all characters from the stack and build the reversed string
    let reversedStr = '';
    while (!stack.isEmpty()) {
      reversedStr += stack.pop();
    }
  
    return reversedStr;
  }
  
  // Example usage:
  const originalString = "Hello, World!";
  const reversedString = reverseString(originalString);
  
  console.log("Original string:", originalString);
  console.log("Reversed string:", reversedString);
  


//Queue-----------------------------------------------------------------------
// 5.
class Queue {
    constructor() {
      this.items = [];
    }
  
    // Method to add an element to the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Method to remove an element from the queue
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return null;
      }
      return this.items.shift();
    }
  
    // Method to view the first element of the queue
    front() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return null;
      }
      return this.items[0];
    }
  
    // Method to check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Method to display all elements in the queue
    display() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
      } else {
        console.log(this.items.join(', '));
      }
    }
  }
  
  // Example usage:
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  
  console.log("Queue after enqueuing elements:");
  queue.display();
  
  console.log("Front element is:", queue.front());
  
  queue.dequeue();
  console.log("Queue after dequeuing an element:");
  queue.display();
  
  console.log("Front element is:", queue.front());
  



// 6.
class Queue1{
    constructor() {
      this.items = [];
    }
  
    // Method to add an element to the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Method to remove an element from the queue
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return null;
      }
      return this.items.shift();
    }
  
    // Method to view the first element of the queue
    front() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return null;
      }
      return this.items[0];
    }
  
    // Method to check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Method to display all elements in the queue
    display() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
      } else {
        console.log(this.items.join(', '));
      }
    }
  }
  
  // Function to simulate a printer queue
  function simulatePrinterQueue() {
    const printerQueue = new Queue1();
  
    // Add print jobs to the queue
    printerQueue.enqueue("Print job 1");
    printerQueue.enqueue("Print job 2");
    printerQueue.enqueue("Print job 3");
  
    console.log("Printer queue after adding jobs:");
    printerQueue.display();
  
    // Process print jobs in order
    while (!printerQueue.isEmpty()) {
      const currentJob = printerQueue.dequeue();
      console.log(`Processing ${currentJob}`);
    }
  
    console.log("Printer queue after processing all jobs:");
    printerQueue.display();
  }
  
  // Example usage:
  simulatePrinterQueue();
  


//Binay Tree
// 7.
class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  // Example usage:
  const root = new TreeNode(1);
  const leftChild = new TreeNode(2);
  const rightChild = new TreeNode(3);
  
  root.left = leftChild;
  root.right = rightChild;
  
  console.log("Root node:", root);
  console.log("Left child:", root.left);
  console.log("Right child:", root.right);
  


// 8.
class TreeNode1{
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    // Method to insert a value into the binary tree
    insert(value) {
      const newNode = new TreeNode1(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this._insertNode(this.root, newNode);
      }
    }
  
    // Helper method to recursively insert a node in the binary tree
    _insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this._insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this._insertNode(node.right, newNode);
        }
      }
    }
  
    // Method to perform in-order traversal and display nodes
    inOrderTraversal() {
      this._inOrderTraversalNode(this.root);
    }
  
    // Helper method to recursively perform in-order traversal
    _inOrderTraversalNode(node) {
      if (node !== null) {
        this._inOrderTraversalNode(node.left);
        console.log(node.value);
        this._inOrderTraversalNode(node.right);
      }
    }
  }
  
  // Example usage:
  const binaryTree = new BinaryTree();
  binaryTree.insert(5);
  binaryTree.insert(3);
  binaryTree.insert(7);
  binaryTree.insert(2);
  binaryTree.insert(4);
  binaryTree.insert(6);
  binaryTree.insert(8);
  
  console.log("In-order traversal of the binary tree:");
  binaryTree.inOrderTraversal();
  




//Graph option
// 9.
class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    // Method to add a vertex to the graph
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    // Method to add an edge between two vertices
    addEdge(vertex1, vertex2) {
      if (!this.adjacencyList[vertex1]) {
        this.addVertex(vertex1);
      }
      if (!this.adjacencyList[vertex2]) {
        this.addVertex(vertex2);
      }
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1); // If it's an undirected graph
    }
  
    // Method to perform a breadth-first search (BFS)
    bfs(start) {
      const queue = [start];
      const result = [];
      const visited = {};
      visited[start] = true;
  
      while (queue.length) {
        const vertex = queue.shift();
        result.push(vertex);
  
        this.adjacencyList[vertex].forEach(neighbor => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        });
      }
  
      return result;
    }
  }
  
  // Example usage:
  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  graph.addVertex('F');
  
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'E');
  graph.addEdge('D', 'E');
  graph.addEdge('D', 'F');
  graph.addEdge('E', 'F');
  
  console.log("Breadth-First Search starting from vertex 'A':");
  console.log(graph.bfs('A'));
  



// 10.
class Graph1{
    constructor() {
      this.adjacencyList = {};
    }
  
    // Method to add a vertex to the graph
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    // Method to add an edge between two vertices
    addEdge(vertex1, vertex2) {
      if (!this.adjacencyList[vertex1]) {
        this.addVertex(vertex1);
      }
      if (!this.adjacencyList[vertex2]) {
        this.addVertex(vertex2);
      }
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1); // If it's an undirected graph
    }
  
    // Method to perform a breadth-first search (BFS) to find the shortest path
    bfsShortestPath(start, end) {
      const queue = [[start]];
      const visited = new Set();
      visited.add(start);
  
      while (queue.length) {
        const path = queue.shift();
        const vertex = path[path.length - 1];
  
        if (vertex === end) {
          return path;
        }
  
        this.adjacencyList[vertex].forEach(neighbor => {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            const newPath = [...path, neighbor];
            queue.push(newPath);
          }
        });
      }
  
      return null; // No path found
    }
  }
  
  // Example usage:
  const graph2= new Graph1();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  graph.addVertex('F');
  
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'E');
  graph.addEdge('D', 'E');
  graph.addEdge('D', 'F');
  graph.addEdge('E', 'F');
  
  const startNode = 'A';
  const endNode = 'F';
  const shortestPath = graph.bfsShortestPath(startNode, endNode);
  
  console.log(`Shortest path from ${startNode} to ${endNode}:`);
  console.log(shortestPath ? shortestPath.join(' -> ') : "No path found");
  