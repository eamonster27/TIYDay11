// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

function max(num0, num1){
    // Your answer here
    if(num0 > num1) {
      return num0;
    }
    return num1;
}


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfThree(num0, num1, num2){
    // Your answer here
    var max = num0;
    if(max < num1) {
      max = num1;
    }
    if(max < num2){
      max = num2;
    }
    return max;
}


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(char){
    // Your answer here
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      return true;
    }
    return false;
}


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:
function sum(num0, num1) {
  return num0 + num1;
}


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:
function avg(num0, num1, num2) {
  return (num0 + num1 + num2)/3;
}


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:
function getLength(str) {
  return str.length;
}


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:
function greaterThan(num0, num1) {
  if(num1 > num0) {
    return true;
  }
  return false;
}


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:
function greet(name){
  return "Hello, " + name + "!";
}


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:
function madLib(word0, word1, word2, word3) {
  
  return ("The %s brown %s jumps over the %s with a %s.", [word0, word1, word2, word3]);
}
