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

    for (let key in frequencyCounter1){
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false;
        }
    }

    return true;
}


//Valid Anagram Algo
//Algorithm to check if 2 strings are a Valid Anagram
//My Solution

function validAnagram(obj1, obj2){
    
      if(obj1.length !== obj2.length){
          return false;
      }
      
      let count1 = {};
      let count2 = {};
      
      for(let val of obj1){
          count1[val] = (count1[val] || 0) + 1
      }
      
      for(let val of obj2){
          count2[val] = (count2[val] || 0) + 1
      }  
      
      for (let key in count1){
          if (!(key in count2)) {
              return false;
          }
          if (count2[key] !== count1[key]){
              return false;
          }
      }
      
      return true;
  }

  //Colt's Solution

  function validAnagramColt(first, second){
    if (first.length !== second.length){
        return false;
    }

    const lookup = {};

    for(let i = 0; i < first.length; i++){
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for(let i = 0; i < second.length; i++){
        let letter = second[i];
        if(!lookup[letter]){
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
  }

  //Colt's Solution - sumZero Algo

  function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left, arr[right]]];
        } else if(sum > 0) {
            right--;
        } else {
            left++;
        }
    }
  }

  //Colt's Solution - countUniqueValues Algo - Runtime: O(n)

  function countUniqueValues(arr){

    if(arr.length === 0) {return 0;}
    var i = 0;

    for (var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
  }

//Colt's Solution - Sliding Window Algo - Runtime: O(n)

function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < num) return null;
    for (let i = 0; i < num; i++){
        maxSum += arr[i];
    }

    tempSum = maxSum;
    for (let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}


//Recursion

function countDown(num){
    if (num <= 0){
        console.log("All Done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

function sumRange(num){
    if(num === 1) return 1;
    return num + sumRange(num - 1);
}

//Recursion Factorial

function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num - 1);
}

//Recursion with Helper Function

function collectOddValues(arr){
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }

        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }

    helper(arr)

    return result;
}



//Pure Recursion of Helper Function Recursion

function collectOddValues(arr){
    let newArr = [];

    if(arr.length === 0){
        return newArr;
    }

    if(arr[0] % 2 !== 0 ){
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

//Colt Steele - Linear Search Problem

function linearSearch(arr, val){
    for(var i = 0; i < arr.length; i++){
        if (arr[i] === val){
            return i;
        } else {
            return -1;
        }
    }
}