//Array Big O Operations

// Push = O(1)
// Pop = O(1)

// Shift = O(N)
// Unshift = O(N)

// Concat = O(N)
// Slice = O(N)
// Splice = O(N)

// Sort = O(N * log N)

// forEach, Map, Filter, Reduce, etc = O(N)

// DS&A Strategies

// 1. Understand the Problem
// 2. Explore Concrete Examples
// 3. Break It Down
// 4. Solve and Simplify
// 5. Look Back & Refactor

//Write a function that takes a string and returns an object with the letters and the number of their occurrences.

// function charCount(str) {
//     var result = {};

//     for (var i = 0; i < str.length; i++) {
//         var char = str[i].toLowerCase();
//         if (/[a-z0-9]/.test(char) { })
//         if (result[char] > 0) {
//             result[char]++;
//         } else {
//             result[char] = 1;
//         };
//     }
// }
// return result;
// }


// function charCount(str) {
//     var result = {};

//     for (var char of str) {
//         if (isAlphaNumeric(char)) {
//             char = str[i].toLowerCase();
//             result[char] = ++result[char] || 1;
//         }
//     }
//     return result;
// }

// function isAlphaNumeric(char) {
//     var code = char.charCodeAt(0);
//     if (!(code > 47 && code < 58) &&
//         !(code > 64 && code < 91) &&
//         !(code > 96 && code < 123)) {
//         return false;
//     }
//     return true;
// }



//Frequecy Counter

// function same(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     for(let i = 0; i < arr1.length; i++){
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if(correctIndex === -1) {
//             return false;
//         }
//         console.log(arr2);
//         arr2.splice(correctIndex,1)
//     }
//     return true;
// }

// same([1,2,3,2], [9,1,4,4])


function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }

    return true;
}


//Valid Anagram Algo
//Algorithm to check if 2 strings are a Valid Anagram
//My Solution

function validAnagram(obj1, obj2) {

    if (obj1.length !== obj2.length) {
        return false;
    }

    let count1 = {};
    let count2 = {};

    for (let val of obj1) {
        count1[val] = (count1[val] || 0) + 1
    }

    for (let val of obj2) {
        count2[val] = (count2[val] || 0) + 1
    }

    for (let key in count1) {
        if (!(key in count2)) {
            return false;
        }
        if (count2[key] !== count1[key]) {
            return false;
        }
    }

    return true;
}

//Colt's Solution

function validAnagramColt(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}

//Colt's Solution - sumZero Algo

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left, arr[right]]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

//Colt's Solution - countUniqueValues Algo - Runtime: O(n)

function countUniqueValues(arr) {

    if (arr.length === 0) { return 0; }
    var i = 0;

    for (var j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
}

//Colt's Solution - Sliding Window Algo - Runtime: O(n)

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}


//Recursion

function countDown(num) {
    if (num <= 0) {
        console.log("All Done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}

//Recursion Factorial

function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}

//Recursion with Helper Function

function collectOddValues(arr) {
    let result = [];

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }

    helper(arr)

    return result;
}



//Pure Recursion of Helper Function Recursion

function collectOddValues(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}


//Colt Steele - Linear Search Problem

function linearSearch(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        } else {
            return -1;
        }
    }
}

//Colt Steele - Binary Search Problem

function binarySearch(arr, val) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);

    while (arr[middle] !== val && start <= end) {
        if (val < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === val) {
        return middle;
    } else {
        return -1;
    }
}

//Colt Steele - Naive String Search

function naiveSearch(long, short) {
    var count = 0;

    for (var i = 0; i < long.length; i++) {
        for (var j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) {
                break;
            }
            if (j === short.length - 1) {
                count++;
            }
        }
    }
    return count;
}

//Colt Steele - Bubble Sort ES5

function bubbleSort(arr) {
    var noSwaps;

    for (var i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }

        if (noSwaps) break;
    }
    return arr;
}

//Colt Steele - Bubble Sort ES6

function bubbleSortES6(arr) {
    const swap = (arr, index1, index2) => {
        [arr[index1], arr[index2] = arr[index2], arr[index1]];
    };

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }

    return arr;
}


//Colt Steele - Selection Sort

function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var lowest = i;

        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[lowest] = temp;
        }
    }

    return arr;
}

//Colt Steele - Insertion Sort

function insertionSort(arr) {

    for (var i = 1; i < arr.length; i++) {
        var currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }

        arr[j + 1] = currentVal;
    }
    return arr;

}

//Colt Steele - Merge Sort

//This Function Merges Sorted Arrays ONLY

function merge(arr1, arr2) {
    let results = [];

    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

//This Function uses Merge function about and Merges Sorted and Unsorted Arrays

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

//Colt Steele - Pivot Helper for Quick Sort

function pivot(arr, start = 0, end = arr.length + 1) {
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }


    var pivot = arr[start];
    var swapIndex = start;

    for (var i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(array, swapIndex, i)
        }
    }
    swap(arr, start, swapIndex)
    return swapIndex;


}


//Colt Steele - Quick Sort

function quickSort(arr, left = 0, right = arr.length - 1) {

    if (left < right) {

        let pivotIndex = pivot(arr, left, right);

        quickSort(arr, left, pivotIndex - 1);

        quickSort(arr, pivotIndex + 1, right);

    }

    return arr;
}

//Colt Steele - Radix Sort Helper Methods

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums) {

    let maxDigits = mostDigits(nums);
    for (let k = 0; k < maxDigits; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => [])

        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }

        nums = [].concat(...digitBuckets);
    }

}

//Linked List

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;

    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        var current = this.head;
        var newTail = current;

        while (current.next) {
            var newTail = current;
            var current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;

    }

    unshift(val) {
        var newNode = new Node(val);
        if (!head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;

        var counter = 0;
        var current = this.head;

        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val) {
        var foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);

        //Double Bang converts value to Boolean

        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return null;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();

        var perviousNode = this.get(index - 1);
        var removed = perviousNode.next;
        this.length--;
        perviousNode.next = removed.next;
    }

    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var prev = null;
        var next; 

        for(var i = o; i < this.length; i++) {
            node = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }
}