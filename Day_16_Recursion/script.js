//Recursion


// Basic recursion
// 1.
function fact(n){
    if (n==0){
        return 1
    }else{
        return (n*fact(n-1))
    }
}
console.log(fact(5))


// 2.
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }else{
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
console.log(fibonacci(15))

//Recursion with arrays
// 3.
function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumArray(arr.slice(1));
}
console.log(sumArray([1, 2, 3, 4, 5]))

// 4.
function findMax(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    const maxOfRest = findMax(arr.slice(1));
    return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}
console.log(findMax([1, 2, 3, 4, 5])); // Output: 5

//string manipulation with resursion
// 5.
function string(s){
     if (s==""){
        return ""
     }
     else{
        return string(s.substring(1))+s.charAt(0);

     }
}
console.log(string("ancdefgh"))



// 6.
function palindrome(s) {
    if (s.length <= 1) {
        return true;
    }
    if (s[0] !== s[s.length - 1]) {
        return false;
    } else {
        return palindrome(s.slice(1, -1));
    }
}

console.log(palindrome("racecar"));    

//Recursion search
// 7.
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1; // target is not found
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, right);
    } else {
        return binarySearch(arr, target, left, mid - 1);
    }
}

// Test cases
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(sortedArray, 5));  // Output: 4
console.log(binarySearch(sortedArray, 1));  // Output: 0
console.log(binarySearch(sortedArray, 10)); // Output: 9
console.log(binarySearch(sortedArray, 7));  // Output: 6
console.log(binarySearch(sortedArray, 11)); // Output: -1



// 8.
function countOccurrences(arr, target, index = 0) {
    if (index >= arr.length) {
        return 0;
    }
    const count = (arr[index] === target ? 1 : 0);
    return count + countOccurrences(arr, target, index + 1);
}

// Test cases
const array1 = [1, 2, 3, 4, 5, 1, 2, 1, 3, 1];
const array2 = [7, 2, 3, 7, 7, 4, 5, 7, 6, 7];
const array3 = [0, 0, 0, 0, 0];
const array4 = [1, 2, 3, 4, 5];

console.log(countOccurrences(array1, 1)); // Output: 4
console.log(countOccurrences(array2, 7)); // Output: 5
console.log(countOccurrences(array3, 0)); // Output: 5
console.log(countOccurrences(array4, 6)); // Output: 0
console.log(countOccurrences(array4, 3)); // Output: 1



// Tree Traversal (optional)
// 9.
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(root) {
    if (root === null) {
        return;
    }
    inOrderTraversal(root.left);
    console.log(root.value);
    inOrderTraversal(root.right);
}

// Test case
// Constructing the following binary tree:
//        4
//      /   \
//     2     6
//    / \   / \
//   1   3 5   7

const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(6);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);

// Performing in-order traversal
inOrderTraversal(root);
// Output: 1 2 3 4 5 6 7


// 10.
class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function calculateDepth(node) {
    if (node === null) {
        return 0;
    }
    const leftSubtreeDepth = calculateDepth(node.left);
    const rightSubtreeDepth = calculateDepth(node.right);
    return Math.max(leftSubtreeDepth, rightSubtreeDepth) + 1;
}

// Test cases
// Constructing the following binary tree:
//        4
//      /   \
//     2     6
//    / \   / \
//   1   3 5   7

const root1 = new BinaryTreeNode(4);
root1.left = new BinaryTreeNode(2);
root1.right = new BinaryTreeNode(6);
root1.left.left = new BinaryTreeNode(1);
root1.left.right = new BinaryTreeNode(3);
root1.right.left = new BinaryTreeNode(5);
root1.right.right = new BinaryTreeNode(7);

console.log(calculateDepth(root1)); // Output: 3

// Constructing a binary tree with only one node:
//    1
const singleNode = new BinaryTreeNode(1);

console.log(calculateDepth(singleNode)); // Output: 1

// Constructing an empty binary tree (null root):
const emptyTree = null;

console.log(calculateDepth(emptyTree)); // Output: 0

// Constructing the following binary tree:
//        1
//       /
//      2
//     /
//    3
//   /
//  4

const skewedTree = new BinaryTreeNode(1);
skewedTree.left = new BinaryTreeNode(2);
skewedTree.left.left = new BinaryTreeNode(3);
skewedTree.left.left.left = new BinaryTreeNode(4);

console.log(calculateDepth(skewedTree)); // Output: 4
