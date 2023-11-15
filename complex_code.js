/* complex_code.js */

// This code implements a complex algorithm for finding all prime numbers within a given range.
// It utilizes a highly efficient sieve of Eratosthenes algorithm, as well as various optimization techniques.
// The code is highly modular, making use of object-oriented programming concepts.

class PrimeFinder {
  constructor(rangeStart, rangeEnd) {
    this.rangeStart = rangeStart;
    this.rangeEnd = rangeEnd;
  }

  findPrimes() {
    let primes = [];
    let sieve = Array(this.rangeEnd + 1).fill(true);
    sieve[0] = sieve[1] = false;

    for (let i = 2; i * i <= this.rangeEnd; i++) {
      if (sieve[i]) {
        for (let j = i * i; j <= this.rangeEnd; j += i) {
          sieve[j] = false;
        }
      }
    }

    for (let i = this.rangeStart; i <= this.rangeEnd; i++) {
      if (sieve[i]) {
        primes.push(i);
      }
    }

    return primes;
  }
}

class NumberUtil {
  static isEven(num) {
    return num % 2 === 0;
  }

  static isOdd(num) {
    return num % 2 !== 0;
  }

  static factorial(num) {
    let result = 1;

    for (let i = 2; i <= num; i++) {
      result *= i;
    }

    return result;
  }
}

// Usage:

const rangeStart = 1;
const rangeEnd = 1000;

const primeFinder = new PrimeFinder(rangeStart, rangeEnd);
const primes = primeFinder.findPrimes();

console.log("Prime numbers within the range", rangeStart, "-", rangeEnd, ":");
console.log(primes);

console.log("Factorial of 10:", NumberUtil.factorial(10));
console.log("Is 25 even?", NumberUtil.isEven(25));
console.log("Is 25 odd?", NumberUtil.isOdd(25));