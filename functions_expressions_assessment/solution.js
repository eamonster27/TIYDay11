// 1.
// Complete the following function
// It should return true if the first argument is greater than the second and false if not
// Use the greater than operator `>`
// A:
var evaluateGreaterThan = function(num1, num2) {
  return (num1 > num2);
}


// 2.
// Call the `evaluateGreaterThan` function in the condition for the following if statement
// Provide arguments to `evaluateGreaterThan` which make the if statement log 'Less than or equal to'
// A.
if (evaluateGreaterThan(1,2)) {
  console.log('Greater than');
} else {
  console.log('Less than or equal to');
}


// 3.
// Refactor the `evaluateGreaterThan` function to match the following specs:
// It returns 'Greater than' if the first argument is greater than the second
// It returns 'Less than' if the first argument is less than the second
// It returns 'Equal to' if the first argument is equal to the second
// A:
evaluateGreaterThan = function(num1, num2) {
  // Your answer here
  if (num1 > num2) {
    return 'Greater than';
  } else if (num1 < num2) {
    return 'Less than';
  } else if (num1 === num2) {
    return 'Equal to';
  }
}

console.assert(evaluateGreaterThan(3, 2) === 'Greater than');
console.assert(evaluateGreaterThan(1, 2) === 'Less than');
console.assert(evaluateGreaterThan(2, 2) === 'Equal to');


// 4.
// If necessary, refactor `evaluateGreaterThan` so that the `Equal to` condition works even if a number string is provided as an argument
// A:
evaluateGreaterThan = function(num1, num2) {
  // Your answer here
  if (num1 > num2) {
    return 'Greater than';
  } else if (num1 < num2) {
    return 'Less than';
  } else if (num1 == num2) {
    return 'Equal to';
  }
}

console.assert(evaluateGreaterThan("3", 2) === 'Greater than');
console.assert(evaluateGreaterThan(1, "2") === 'Less than');
console.assert(evaluateGreaterThan(2, "2") === 'Equal to');


// 5.
// The below function does not work. The variable
// twoPlusTwo gets set to `undefined`. Refactor
// the function to make it work.
function addNumbers(numberA, numberB) {
    return numberA + numberB;
}

var twoPlusTwo = addNumbers(2, 2)

console.assert(twoPlusTwo === 4)
