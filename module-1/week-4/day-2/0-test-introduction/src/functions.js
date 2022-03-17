// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  return num % 2 === 0;
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  return numbers.reduce((acc, number) => {
    return acc + number;
  }, 0)
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  let result = 0;
  numbers.forEach(number => {
    if(number > result){
      result = number;
    }
  })
  return result;
}

// Return the longest string in an array
function longestString(strings) {
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
}




// The following is required for automated testing:
if (typeof module !== 'undefined') {
  module.exports = {
    product,
    isEven,
    sumArray,
    maxOfArray
  };
}