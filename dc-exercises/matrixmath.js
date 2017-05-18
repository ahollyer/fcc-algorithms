// matrixmath.js
// Aspen Hollyer

var m1 = [[1, 3], [2, 4]];
var m2 = [[5, 2], [1, 0]];

// Matrix Addition
// Write a function matrixAdd which accepts a pair of two-dimensional
// arrays and returns a new two-dimensional array containing their
// matrix sum.

function matrixAdd(arr1, arr2) {
  let sum = [];
  for (let i = 0; i < arr1.length; i++) {
    let temp = [];
    for (let j = 0; j < arr1[i].length; j++) {
      temp.push(arr1[i][j] + arr2[i][j]);
    }
    sum.push(temp)
  }
  return sum;
}
console.log(matrixAdd(m1, m2)); //[[6, 5], [3, 4]]

// Matrix Multiplication
// Write a function matrixMultiply which accepts a pair of two-dimensional
// arrays--you can assume the matrices are 2x2 in size. Return the product
// of the two matrices.

m1 = [[2, 4], [3, 4]];
m2 = [[5, 2], [3, 1]];

function matrixMultiply(arr1, arr2) {
  let product = [];
  for (let i = 0; i < arr1.length; i++) {
    let temp = [];
    for (let j = 0; j < arr1[i].length; j++) {
      let sum = 0;
      for (let k = 0; k < arr2[i].length; k++) {
        sum += (arr1[i][k] * arr2[k][j]);
      }
      temp.push(sum);
    }
    product.push(temp);
  }
  return product;
}
console.log(matrixMultiply(m1, m2)); //[[22, 8], [27, 10]]
