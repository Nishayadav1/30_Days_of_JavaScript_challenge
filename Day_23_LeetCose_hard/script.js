// LeetCode Hard

// 1.------>Median of two sorted arrays
function findMedianSortedArrays(nums1, nums2) {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    let m = nums1.length;
    let n = nums2.length;
    let imin = 0;
    let imax = m;
    let halfLen = Math.floor((m + n + 1) / 2);

    while (imin <= imax) {
        let i = Math.floor((imin + imax) / 2);
        let j = halfLen - i;

        if (i < m && nums2[j - 1] > nums1[i]) {
            // i is too small, need to increase it
            imin = i + 1;
        } else if (i > 0 && nums1[i - 1] > nums2[j]) {
            // i is too big, need to decrease it
            imax = i - 1;
        } else {
            // i is perfect
            let maxLeft = 0;
            if (i === 0) maxLeft = nums2[j - 1];
            else if (j === 0) maxLeft = nums1[i - 1];
            else maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);

            if ((m + n) % 2 === 1) {
                return maxLeft;
            }

            let minRight = 0;
            if (i === m) minRight = nums2[j];
            else if (j === n) minRight = nums1[i];
            else minRight = Math.min(nums1[i], nums2[j]);

            return (maxLeft + minRight) / 2.0;
        }
    }

    throw new Error("Input arrays are not sorted or invalid.");
}

// Test cases
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2.0
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5
console.log(findMedianSortedArrays([0, 0], [0, 0])); // Output: 0.0
console.log(findMedianSortedArrays([], [1])); // Output: 1.0
console.log(findMedianSortedArrays([1], [])); // Output: 1.0



// 2.------->marge k shorted list
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(node) {
        this.heap.push(node);
        this._heapifyUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 0) return null;
        const root = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this._heapifyDown(0);
        }
        return root;
    }

    _heapifyUp(index) {
        let parentIndex = Math.floor((index - 1) / 2);
        if (index > 0 && this.heap[index].val < this.heap[parentIndex].val) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            this._heapifyUp(parentIndex);
        }
    }

    _heapifyDown(index) {
        let leftIndex = 2 * index + 1;
        let rightIndex = 2 * index + 2;
        let smallest = index;

        if (leftIndex < this.heap.length && this.heap[leftIndex].val < this.heap[smallest].val) {
            smallest = leftIndex;
        }
        if (rightIndex < this.heap.length && this.heap[rightIndex].val < this.heap[smallest].val) {
            smallest = rightIndex;
        }
        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this._heapifyDown(smallest);
        }
    }
}

function mergeKLists(lists) {
    let minHeap = new MinHeap();
    for (let list of lists) {
        if (list) minHeap.push(list);
    }

    let dummyHead = new ListNode(0);
    let current = dummyHead;

    while (minHeap.heap.length > 0) {
        let node = minHeap.pop();
        current.next = node;
        current = current.next;

        if (node.next) {
            minHeap.push(node.next);
        }
    }

    return dummyHead.next;
}

// Helper function to create a linked list from an array
function createList(arr) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummyHead.next;
}

// Helper function to print a linked list
function printList(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join(' -> '));
}

// Test cases
let l1 = createList([1, 4, 5]);
let l2 = createList([1, 3, 4]);
let l3 = createList([2, 6]);

let lists = [l1, l2, l3];
let mergedList = mergeKLists(lists);
printList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6

l1 = createList([]);
l2 = createList([]);
l3 = createList([]);

lists = [l1, l2, l3];
mergedList = mergeKLists(lists);
printList(mergedList); // Output: (empty)

l1 = createList([1]);
l2 = createList([2]);
l3 = createList([3]);

lists = [l1, l2, l3];
mergedList = mergeKLists(lists);
printList(mergedList); // Output: 1 -> 2 -> 3



// 3.------->trapping rain water
function trap(height) {
    if (height.length === 0) return 0;

    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let trappedWater = 0;

    while (left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                trappedWater += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                trappedWater += rightMax - height[right];
            }
            right--;
        }
    }

    return trappedWater;
}

// Test cases
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 1, 0, 1, 2, 1, 0, 0])); // Output: 8
console.log(trap([4, 2, 0, 3, 2, 5])); // Output: 9
console.log(trap([1, 2, 3, 4, 5])) // Output: 0
console.log(trap([5, 4, 3, 2, 1])) // Output: 0
console.log(trap([0, 0, 0, 0, 0])) // Output: 0




// 4.-------->N-Queen

function solveNQueens(n) {
    const results = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    function isSafe(row, col) {
        // Check the column
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        // Check the upper left diagonal
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        // Check the upper right diagonal
        for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    }

    function backtrack(row) {
        if (row === n) {
            // Convert the board to a format suitable for output
            results.push(board.map(row => row.join('')));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = '.'; // Backtrack
            }
        }
    }

    backtrack(0);
    return results;
}

// Helper function to print solutions in a readable format
function printSolutions(solutions) {
    solutions.forEach((solution, index) => {
        console.log(`Solution ${index + 1}:`);
        solution.forEach(row => console.log(row));
        console.log();
    });
}

// Test cases
console.log('Test Case 1 (n = 4):');
printSolutions(solveNQueens(4));

console.log('Test Case 2 (n = 8):');
printSolutions(solveNQueens(8));



// 5.-------->Word Leader
function wordLadderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    const queue = [[beginWord, 1]]; // [currentWord, currentLength]
    const visited = new Set();
    visited.add(beginWord);

    while (queue.length > 0) {
        const [word, length] = queue.shift();

        if (word === endWord) return length;

        for (let i = 0; i < word.length; i++) {
            for (let charCode = 97; charCode <= 122; charCode++) {
                const newChar = String.fromCharCode(charCode);
                const newWord = word.slice(0, i) + newChar + word.slice(i + 1);

                if (wordSet.has(newWord) && !visited.has(newWord)) {
                    visited.add(newWord);
                    queue.push([newWord, length + 1]);
                }
            }
        }
    }

    return 0; // No transformation sequence found
}

// Helper function to log results
function logResults(beginWord, endWord, wordList) {
    console.log(`Begin Word: ${beginWord}`);
    console.log(`End Word: ${endWord}`);
    console.log(`Word List: ${wordList}`);
    console.log(`Shortest Transformation Length: ${wordLadderLength(beginWord, endWord, wordList)}`);
    console.log();
}

// Test cases
logResults('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']);
logResults('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']);
logResults('a', 'c', ['a', 'b', 'c']);
logResults('a', 'c', ['b', 'c']);
