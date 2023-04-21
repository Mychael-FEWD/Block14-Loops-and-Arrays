//////////////////////
/////Only Odds////////
//////////////////////

// Create an array to store values to loop through to test for odd values
const originalArray = [];
//Test Cases
// originalArray.splice(0, 0, 2, 4, 6, 8, 11, 20, 15, 22); // Expected output: [11, 15]
// originalArray.splice(0, originalArray.length, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // Expected output: [1, 3, 5, 7, 9]
originalArray.splice(0, originalArray.length, 70, 42, 55, 81, 21, 91, 34); // Expected output: [55, 81, 21, 91]
// originalArray.splice(0, originalArray.length, 2, 4, 6, 8, 10, 11, 12); // Expected output: [11]
// console.log(originalArray);
// create an empty array that will be used to store values from the loop based on the condition of being odd
const onlyOdds = [];
// Create a loop to check an array for odd values and return an array with only odd values
for (let i = 0; i < originalArray.length; i++) {
  /* check if the array position[i] is an odd number */
  if (originalArray[i] % 2 === 1) {
    onlyOdds.push(originalArray[i]); // if the value is odd, add the value into a new array
  }
}
// console.log(onlyOdds);

// Solution 2 for Only Odds Using a function
const howManyOdds = function (numberArray) {
  const oddValues = [];
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 2 === 1) {
      oddValues.push(numberArray[i]);
    }
  }
  return console.log(oddValues);
};
howManyOdds(originalArray);

//////////////////////////////////
///////Vowel Vs Consonant/////////
//////////////////////////////////

// create a variable to store the string
let testString = "HeLlo"; // expected result: "hello has 3 consonants and 2 vowels"
// TEST VALUES
testString = "ukulele"; // expected result: "ukelele has 3 consonants and 4 vowels"
testString = "awesome"; // expected result: "awesome has 3 consonants and 4 vowels"
testString = "onomonopia"; // expected result: "onomonopia has 4 consonants and 6 vowels"
testString = "textbook"; // expected result: "textbook has 5 consonants and 3 vowels"

// loop is going to test for values that are lowercase; make sure all letters in the string are lowercase
testString = testString.toLowerCase();
// console.log(testString);

// create a variable to count the consonants
let consonantCounter = 0;
// create a variable to count the vowels.
let vowelCounter = 0;

// Create an algorithm that takes a string as the input
// algorithm should count how many vowels and consonants a string has
for (let i = 0; i < testString.length; i++) {
  // test if the letter at the string position is a vowel or a consonant
  // vowels: a, e, i, o, u
  if (
    testString[i] === "a" ||
    testString[i] === "e" ||
    testString[i] === "i" ||
    testString[i] === "o" ||
    testString[i] === "u"
  ) {
    vowelCounter++;
  } else {
    consonantCounter++;
  }
}
const vowelConsonantResult = `${testString} has ${consonantCounter} consonants and ${vowelCounter} vowels`;
// console.log(vowelConsonantResult);

// Solution 2 for Vowel vs Consonant using a function

const vowelConsonantFunction = function (testingString) {
  testingString = testingString.toLowerCase();
  let vowelCount = 0;
  let consonantCount = 0;
  for (let i = 0; i < testingString.length; i++) {
    if (
      testingString[i] === "a" ||
      testingString[i] === "e" ||
      testingString[i] === "i" ||
      testingString[i] === "o" ||
      testingString[i] === "u"
    ) {
      vowelCount++;
    } else {
      consonantCount++;
    }
  }
  const functionResult = `${testingString} has ${consonantCount} consonants and ${vowelCount} vowels`;
  return console.log(functionResult);
};
vowelConsonantFunction("hello");
// vowelConsonantFunction("ukulele");
// vowelConsonantFunction("awesome");
// vowelConsonantFunction("onomonopia");
// vowelConsonantFunction("textbook");
// By using a function to store variable declarations and other aspects; we were able to solve the problem with 20 lines of code versus 35 lines of code for the first solution which almost havles the codework.

//////////////////////////////////
//////////Reverse Array///////////
//////////////////////////////////

// Create a variable to contain the original array
const normalArray = [1, 2, 3]; // Expected result: [3, 2, 1]
// TEST VALUES
// normalArray.splice(0, normalArray.length, 1, 3, 5, 7, 9, 11); // Expected result: [11, 9, 7, 5, 3, 1]
// normalArray.splice(0, normalArray.length, 20, 50, 30, 60, 200); // Expected result: [200, 60, 30, 50, 20]
// normalArray.splice(0, normalArray.length, 1, -1, 2, -3, 5, -8, 13); // Expected result: [13, -8, 5, -3, 2, -1, 1]

// Create a variable of an empty array for the values to be passed into
const reversedArray = [];
// Create an algorithm that accept an array of numbers and then creates a new array in reverse order
for (let i = 0; i < normalArray.length; i++) {
  // Since values are supposed to be in reverse order but are going into a new array just pass all the values into the front of the array
  // values can be added to the front of the array using array.unshift(<value>);
  reversedArray.unshift(normalArray[i]);
}
// console.log(reversedArray);

// Solution 2 for Reverse Array using a function
const arrayReverser = function (array) {
  const reverseArray = [];
  for (let i = 0; i < array.length; i++) {
    reverseArray.unshift(array[i]);
  }
  return console.log(reverseArray);
};
arrayReverser(normalArray);

//////////////////////
/////FizzBuzz/////////
//////////////////////
// Create a variable to change throughout the loop
let fizzBuzzTest = 1;
// Write an algorithm that prints each number from 1 - 100 on a new line
while (fizzBuzzTest < 101) {
  if (fizzBuzzTest % 3 === 0 && fizzBuzzTest % 5 === 0) {
    console.log("FizzBuzz"); // if the number is a multiple of both 3 and 5: print "FizzBuzz" instead of the number
  } else if (fizzBuzzTest % 3 === 0) {
    console.log("Fizz"); // if the number is a multiple of 3: print "Fizz" instead of the number
  } else if (fizzBuzzTest % 5 === 0) {
    console.log("Buzz"); // if the number is a multiple of 5: print "Buzz" instead of the number
  } else {
    console.log(fizzBuzzTest);
  }
  fizzBuzzTest++;
}
