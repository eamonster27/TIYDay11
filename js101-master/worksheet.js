
// Example

// The purpose of this first exercise is just to show how
// assertions work and how the homework should be carried out.
// We'll do it together in class.

// Part EXAMPLE

// Write a function called addOne() that returns the input number, plus one.

var addOne = function(num) {
	return num + 1;
};

// Part 1

// Fix the following code so doubleNum(2) wil equal 4.

var doubleNum = function(num) {
	return num * 2;
};

/**
 * PART 2
 *
 * Write a function called sum that takes two numbers as
 * inputs and computes the sum of those two numbers.
 */
 function sum(num0, num1){
 	if(((typeof num0) !== "number" || (typeof num1) !== "number") || (isNegative(num0) || isNegative(num1))) {
 		return null;
 	}
  return num0 + num1;
 }
 // PART 2.5

// modify your sum() function so that it will return null
// if either of the inputs is not a number.

// PART 3

// Write a function called average that takes two numbers
// as inputs and returns the average of the two. To avoid
// repeating yourself, use your sum function inside
// of your average function.
function average(num0, num1){
	return sum(num0, num1) / 2;
}

// Part 4

// Write a function called isNegative that will tell
// whether a number is negative or not.
function isNegative(num){
	return num < 0;
}

// Now, modify your sum function again, so that it
// will return null if any of the inputs is negative.
// To avoid repeating yourself, use your isNegative
// function inside your sum funciton ***


// Part 5

// Write a function that will find the minimum of four
// input numbers. You can do it using nested if statements,
// boolean operators, or both (but not neither).
function minFunc(num0, num1, num2, num3) {
	var min = num0;
	if(min > num1) {
		min = num1;
	}
	else if(min > num2) {
		min = num2;
	}
	else if(min > num3) {
		min = num3;
	}
	return min;
}

// Part 6

// Using logical operators, write a function that will
// return true if either input is a string, but not
// both or neither.

function isString(arg0, arg1) {
	if(typeof(arg0) === "string" && typeof(arg1) !== "string"){
		return true;
	}
	else if(typeof(arg0) !== "string" && typeof(arg1) === "string"){
		return true;
	}
	return false; 
}

// HARD MODE

// Part 7

// Write a function called doTwice that takes as input a
// function and invokes that function twice.

// For testing purposes, I've included some functions that
// modify global variables, although that's not a good
// pattern for production code.

var doTwice = function() {

}

var helloWorld = function() {
	console.log('hello world')
}


doTwice(helloWorld) // should print 'hello world' to the console twice.


// Part 8

// Write a function called conditionallyInvoke that takes a function
// as input. It should invoke that input function only if
// the value of a certain global variable, called ORACLE, is
// "YES." Otherwise, it will does nothing.

var conditionallyInvoke = function() {

}

var ORACLE = 'NO'

conditionallyInvoke(helloWorld) // should do nothing

var ORACLE = 'YES'

conditionallyInvoke(helloWorld) // should print hello world


// EPIC MODE

// For parts 9 through 11, your only instructions are to make the tests pass.

// Part 9

var factory = function() {

}


// Part 10

var factory2 = function() {
	// you want more?
}

// Part 11

var factory3 = function(stuff) {
	// This can't be healthy...
}
