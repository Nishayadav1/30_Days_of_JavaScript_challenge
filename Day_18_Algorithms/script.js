//Alogorithms

//sorting Algorithms--------------------------------------------------------
// 1.
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
  
    // Traverse through all array elements
    for (let i = 0; i < n - 1; i++) {
      swapped = false;
  
      // Last i elements are already in place
      for (let j = 0; j < n - i - 1; j++) {
        // Swap if the element found is greater than the next element
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true;
        }
      }
  
      // If no two elements were swapped in the inner loop, then break
      if (!swapped) break;
    }
  }
  
  // Example usage:
  const numbers = [64, 34, 25, 12, 22, 11, 90];
  console.log("Original array:", numbers);
  
  bubbleSort(numbers);
  console.log("Sorted array:", numbers);
  


// 2.
function selectionSort(arr) {
    let n = arr.length;
  
    // Traverse through all array elements
    for (let i = 0; i < n - 1; i++) {
      // Find the index of the smallest element in the remaining unsorted part of the array
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      // Swap the found minimum element with the first element of the unsorted part
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
  }
  
  // Example usage:
  const numbers1 = [64, 34, 25, 12, 22, 11, 90];
  console.log("Original array:", numbers);
  
  selectionSort(numbers);
  console.log("Sorted array:", numbers);
  



// 3.
function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);
  
    return [...quickSort(left), ...middle, ...quickSort(right)];
  }
  
  // Example usage:
  const numbers2 = [64, 34, 25, 12, 22, 11, 90];
  console.log("Original array:", numbers);
  
  const sortedArray = quickSort(numbers);
  console.log("Sorted array:", sortedArray);
  


//Searching Algorithm--------------------------------------------------------
// 4.
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i; // Return the index of the target value
      }
    }
    return -1; // Return -1 if the target value is not found
  }
  
  // Example usage:
  const numbers3 = [64, 34, 25, 12, 22, 11, 90];
  const target = 22;
  
  const index = linearSearch(numbers, target);
  
  if (index !== -1) {
    console.log(`Target value ${target} found at index ${index}`);
  } else {
    console.log(`Target value ${target} not found in the array`);
  }
  

// 5.
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid; // Return the index of the target value
      }
  
      if (arr[mid] < target) {
        left = mid + 1; // Search in the right half
      } else {
        right = mid - 1; // Search in the left half
      }
    }
  
    return -1; // Return -1 if the target value is not found
  }
  
  // Example usage:
  const sortedNumbers = [11, 12, 22, 25, 34, 64, 90];
  const target1 = 25;
  
  const index1 = binarySearch(sortedNumbers, target);
  
  if (index !== -1) {
    console.log(`Target value ${target} found at index ${index}`);
  } else {
    console.log(`Target value ${target} not found in the array`);
  }
  


// String Algoritjms----------------------------------------------------------------
// 6.
function countCharacterOccurrences(str) {
    const charCount = {};
  
    for (let char of str) {
      // If the character is already in the object, increment its count
      if (charCount[char]) {
        charCount[char]++;
      } else {
        // Otherwise, initialize its count to 1
        charCount[char] = 1;
      }
    }
  
    return charCount;
  }
  
  // Example usage:
  const inputString = "hello world";
  const characterCounts = countCharacterOccurrences(inputString);
  
  console.log("Character counts:");
  for (const [char, count] of Object.entries(characterCounts)) {
    console.log(`'${char}': ${count}`);
  }
  

// 7.
function longestUniqueSubstringLength(str) {
    let start = 0; // Start index of the current substring
    let maxLength = 0; // Maximum length of substrings without repeating characters
    const charIndexMap = {}; // Map to store the last index of each character
  
    for (let end = 0; end < str.length; end++) {
      const char = str[end];
  
      if (char in charIndexMap && charIndexMap[char] >= start) {
        // If character is repeated, move the start index to the right of the last occurrence
        start = charIndexMap[char] + 1;
      }
  
      // Update the last index of the current character
      charIndexMap[char] = end;
  
      // Calculate the length of the current substring and update the maximum length
      maxLength = Math.max(maxLength, end - start + 1);
    }
  
    return maxLength;
  }
  
  // Example usage:
  const inputString1 = "abcabcbb";
  const length = longestUniqueSubstringLength(inputString);
  
  console.log(`Length of the longest substring without repeating characters: ${length}`);
  

//Array Algorithms-------------------------------------------------------
// 8.
function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; // Handle cases where k is larger than the array length
    
    if (k === 0) return arr; // No rotation needed if k is 0 or a multiple of array length
  
    // Slice and concatenate the array to achieve rotation
    const rotatedArray = [...arr.slice(-k), ...arr.slice(0, -k)];
    
    return rotatedArray;
  }
  
  // Example usage:
  const array = [1, 2, 3, 4, 5, 6, 7];
  const k = 3;
  
  const rotated = rotateArray(array, k);
  console.log(`Array rotated by ${k} positions:`);
  console.log(rotated);
  

// 9.
function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;
  
    // Merge arrays until one of them is exhausted
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
  
    // Append remaining elements from arr1, if any
    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }
  
    // Append remaining elements from arr2, if any
    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }
  
    return mergedArray;
  }
  
  // Example usage:
  const array1 = [1, 3, 5, 7];
  const array2 = [2, 4, 6, 8];
  
  const merged = mergeSortedArrays(array1, array2);
  console.log("Merged array:");
  console.log(merged);
  

//Dynamic Programming---------------------------------------------------
// 10.
function fibonacci(n) {
    if (n <= 1) return n;
  
    // Create an array to store Fibonacci numbers
    const memo = [0, 1];
  
    // Compute Fibonacci numbers and store them in memo array
    for (let i = 2; i <= n; i++) {
      memo[i] = memo[i - 1] + memo[i - 2];
    }
  
    return memo[n];
  }
  
  // Example usage:
  const n = 10; // The number of Fibonacci numbers to compute
  console.log(`Fibonacci sequence up to ${n}:`);
  for (let i = 0; i <= n; i++) {
    console.log(`Fibonacci(${i}) = ${fibonacci(i)}`);
  }

  
// 11.
function knapsack(weights, values, capacity) {
    const n = weights.length;
    const dp = Array(n + 1).fill(null).map(() => Array(capacity + 1).fill(0));
  
    // Build the dp table
    for (let i = 1; i <= n; i++) {
      for (let w = 1; w <= capacity; w++) {
        if (weights[i - 1] <= w) {
          // Option to include the item
          dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
        } else {
          // Option to exclude the item
          dp[i][w] = dp[i - 1][w];
        }
      }
    }
  
    return dp[n][capacity];
  }
  
  // Example usage:
  const weights = [2, 3, 4, 5];  // Weights of the items
  const values = [3, 4, 5, 6];   // Values of the items
  const capacity = 5;            // Maximum weight capacity of the knapsack
  
  const maxValue = knapsack(weights, values, capacity);
  console.log(`Maximum value that can be obtained: ${maxValue}`);
  