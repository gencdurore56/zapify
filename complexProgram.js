/*
   Filename: complexProgram.js
   Description: A complex and elaborate program that showcases various concepts in JavaScript.
*/

// Importing necessary modules
const readline = require('readline');

// Function to calculate the factorial of a number
function factorial(num) {
   if (num === 0 || num === 1) {
      return 1;
   } else {
      return num * factorial(num - 1);
   }
}

// Function to check if a number is prime
function isPrime(num) {
   if (num === 1) {
      return false;
   } else if (num === 2) {
      return true;
   } else {
      for (let i = 2; i < Math.sqrt(num) + 1; i++) {
         if (num % i === 0) {
            return false;
         }
      }
      return true;
   }
}

// Function to generate Fibonacci sequence up to a given number
function fibonacci(num) {
   let fibSeq = [0, 1];
   
   while (fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2] <= num) {
      fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2]);
   }
   
   return fibSeq;
}

// Class representing a rectangle
class Rectangle {
   constructor(length, width) {
      this.length = length;
      this.width = width;
   }

   get area() {
      return this.length * this.width;
   }

   get perimeter() {
      return 2 * (this.length + this.width);
   }
}

// Creating an instance of the Rectangle class
const rectangle = new Rectangle(5, 10);

// Function to get the sum of two numbers
function addNumbers(num1, num2) {
   return num1 + num2;
}

// Function to find the maximum of three numbers
function findMax(num1, num2, num3) {
   return Math.max(num1, num2, num3);
}

// Function to reverse a string
function reverseString(str) {
   return str.split('').reverse().join('');
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
   const reversedStr = reverseString(str);
   return str === reversedStr;
}

// Creating a readline interface for user interaction
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

// Asking the user for input
rl.question('Enter a number to calculate factorial: ', (number) => {
   const result = factorial(parseInt(number, 10));

   console.log(`Factorial of ${number} is: ${result}`);
   rl.close();
});

// Generating the Fibonacci sequence up to 100
const fibSeq = fibonacci(100);
console.log('Fibonacci Sequence:', fibSeq);

// Check if a number is prime
console.log('Is 17 prime?', isPrime(17));

// Calculate the area and perimeter of the rectangle
console.log('Rectangle area:', rectangle.area);
console.log('Rectangle perimeter:', rectangle.perimeter);

// Sum of two numbers
console.log('Sum of 10 and 20:', addNumbers(10, 20));

// Maximum of three numbers
console.log('Maximum of 5, 8, and 3:', findMax(5, 8, 3));

// Reverse a string
console.log('Reverse of "Hello World":', reverseString('Hello World'));

// Check if a string is palindrome
console.log('Is "racecar" a palindrome?', isPalindrome('racecar'));