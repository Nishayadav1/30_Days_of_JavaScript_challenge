// LeetCode Medium
// 1.Add two number----------------------------------------
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry > 0) {
        let x = l1 !== null ? l1.val : 0;
        let y = l2 !== null ? l2.val : 0;
        let sum = carry + x + y;

        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
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
let l1 = createList([2, 4, 3]); // Represents the number 342
let l2 = createList([5, 6, 4]); // Represents the number 465
let sum = addTwoNumbers(l1, l2);
printList(sum); // Output: 7 -> 0 -> 8 (Represents the number 807)

l1 = createList([0]);
l2 = createList([0]);
sum = addTwoNumbers(l1, l2);
printList(sum); // Output: 0

l1 = createList([9, 9, 9, 9, 9, 9, 9]); // Represents the number 9999999
l2 = createList([9, 9, 9, 9]); // Represents the number 9999
sum = addTwoNumbers(l1, l2);
printList(sum); // Output: 8 -> 9 -> 9 -> 9 -> 0 -> 0 -> 0 -> 1 (Represents the number 10009998)






// 2.----------->Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s) {
    let n = s.length;
    let set = new Set();
    let left = 0;
    let right = 0;
    let maxLength = 0;

    while (right < n) {
        if (!set.has(s[right])) {
            set.add(s[right]);
            maxLength = Math.max(maxLength, right - left + 1);
            right++;
        } else {
            set.delete(s[left]);
            left++;
        }
    }

    return maxLength;
}
let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s)); // Output should be 3 ("abc")
s = "bbbbb";
console.log(lengthOfLongestSubstring(s)); // Output should be 1 ("b")

// 3.---------->
function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        // Calculate the current area
        let currentHeight = Math.min(height[left], height[right]);
        let currentWidth = right - left;
        let currentArea = currentHeight * currentWidth;
        
        // Update the maximum area if the current area is greater
        maxWater = Math.max(maxWater, currentArea);
        
        // Move the pointer of the shorter line towards the center
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}

// Test cases
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49
console.log(maxArea([1, 1])); // Output: 1
console.log(maxArea([4, 3, 2, 1, 4])); // Output: 16
console.log(maxArea([1, 2, 1])); // Output: 2



// 4.---------->
function threeSum(nums) {
    let results = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate values for i

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                results.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicate values for left
                while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicate values for right
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return results;
}

// Test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([])); // Output: []
console.log(threeSum([0])); // Output: []
console.log(threeSum([0, 0, 0])); // Output: [[0, 0, 0]]
console.log(threeSum([-2, 0, 1, 1, 2])); // Output: [[-2, 0, 2], [-2, 1, 1]]




// 5.------------>
function groupAnagrams(strs) {
    let anagrams = {};

    for (let str of strs) {
        // Sort the characters in the string to form the key
        let sortedStr = str.split('').sort().join('');
        
        // If the key doesn't exist in the map, create a new array for it
        if (!anagrams[sortedStr]) {
            anagrams[sortedStr] = [];
        }
        
        // Add the original string to the corresponding array
        anagrams[sortedStr].push(str);
    }

    // Return the grouped anagrams as an array of arrays
    return Object.values(anagrams);
}

// Test cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); 
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

console.log(groupAnagrams([""])); 
// Output: [[""]]

console.log(groupAnagrams(["a"])); 
// Output: [["a"]]

console.log(groupAnagrams(["ab", "ba", "abc", "cab", "bca", "xy", "yx"])); 
// Output: [["ab", "ba"], ["abc", "cab", "bca"], ["xy", "yx"]]
