/*
Filename: ComplexProgram.js
Content: A complex program that performs advanced mathematical operations and manipulates data structures.
*/

// Define a class representing a complex number
class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  // Define method to add two complex numbers
  add(other) {
    return new ComplexNumber(
      this.real + other.real,
      this.imaginary + other.imaginary
    );
  }

  // Define method to subtract two complex numbers
  subtract(other) {
    return new ComplexNumber(
      this.real - other.real,
      this.imaginary - other.imaginary
    );
  }

  // Define method to multiply two complex numbers
  multiply(other) {
    return new ComplexNumber(
      this.real * other.real - this.imaginary * other.imaginary,
      this.real * other.imaginary + this.imaginary * other.real
    );
  }

  // Define method to compute the modulus of a complex number
  modulus() {
    return Math.sqrt(this.real ** 2 + this.imaginary ** 2);
  }

  // Define method to compute the conjugate of a complex number
  conjugate() {
    return new ComplexNumber(this.real, -this.imaginary);
  }
}

// Create complex numbers
const a = new ComplexNumber(3, 4);
const b = new ComplexNumber(1, 2);

// Perform complex number operations
const sum = a.add(b);
const difference = a.subtract(b);
const product = a.multiply(b);
const mod = a.modulus();
const conjugate = a.conjugate();

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Modulus:", mod);
console.log("Conjugate:", conjugate);

// Define a class representing a matrix
class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.data = [];

    for (let i = 0; i < rows; i++) {
      this.data[i] = [];
      for (let j = 0; j < cols; j++) {
        this.data[i][j] = 0;
      }
    }
  }

  // Define method to set matrix element
  setElement(row, col, value) {
    this.data[row][col] = value;
  }

  // Define method to get matrix element
  getElement(row, col) {
    return this.data[row][col];
  }

  // Define method to add two matrices
  add(other) {
    if (this.rows !== other.rows || this.cols !== other.cols) {
      throw new Error("Matrix dimensions do not match.");
    }

    const result = new Matrix(this.rows, this.cols);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        result.setElement(i, j, this.data[i][j] + other.data[i][j]);
      }
    }

    return result;
  }

  // Define method to subtract two matrices
  subtract(other) {
    if (this.rows !== other.rows || this.cols !== other.cols) {
      throw new Error("Matrix dimensions do not match.");
    }

    const result = new Matrix(this.rows, this.cols);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        result.setElement(i, j, this.data[i][j] - other.data[i][j]);
      }
    }

    return result;
  }

  // Define method to multiply two matrices
  multiply(other) {
    if (this.cols !== other.rows) {
      throw new Error("Matrix dimensions are not valid for multiplication.");
    }

    const result = new Matrix(this.rows, other.cols);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < other.cols; j++) {
        let sum = 0;
        for (let k = 0; k < this.cols; k++) {
          sum += this.data[i][k] * other.data[k][j];
        }
        result.setElement(i, j, sum);
      }
    }

    return result;
  }
}

// Create matrices
const matrixA = new Matrix(2, 3);
const matrixB = new Matrix(3, 2);

// Set matrix elements
matrixA.setElement(0, 0, 1);
matrixA.setElement(0, 1, 2);
matrixA.setElement(0, 2, 3);
matrixA.setElement(1, 0, 4);
matrixA.setElement(1, 1, 5);
matrixA.setElement(1, 2, 6);

matrixB.setElement(0, 0, 7);
matrixB.setElement(0, 1, 8);
matrixB.setElement(1, 0, 9);
matrixB.setElement(1, 1, 10);
matrixB.setElement(2, 0, 11);
matrixB.setElement(2, 1, 12);

// Perform matrix operations
const matrixSum = matrixA.add(matrixB);
const matrixDiff = matrixA.subtract(matrixB);
const matrixProduct = matrixA.multiply(matrixB);

console.log("Matrix Sum:", matrixSum);
console.log("Matrix Difference:", matrixDiff);
console.log("Matrix Product:", matrixProduct);