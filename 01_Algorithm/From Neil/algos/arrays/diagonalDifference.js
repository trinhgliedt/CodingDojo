// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

const squareMatrix1 = [
  [1,  2,  3,  4],
  [4,  5,  6,  7],
  [9,  8,  9,  10],
  [11, 12, 13, 15],
];
//sum1=30
//sum2=29
//return 1
//arr[0][0] + arr[1][1] + arr[2][2]
// arr[0][2] + arr[2][1] + + arr[3][0]
//arr[0][arr.length-1-0] + arr[1][arr.length-1-1] + arr[1][arr.length-1-2]
//
const expected = 2;
/* 
  left to right diagonal: 1 + 5 + 9 = 15
  right to left diagonal: 3 + 5 + 9 = 17
  absolute difference = 2
*/

/**
 * Calculates the absolute diagonal difference of a square matrix
 * @param   {Array<Array<number>>} sqrMatrix
 *          2d array of numbers representing a square matrix (rows and columns)
 * @return  {number}
 *          Represents the absolute (Math.abs) difference between
 *          the top left to bottom right diagonal and the top right to bottom left diagonal
 * Time:    O(...)
 * Space:   O(...)
 */
function diagonalDifference(sqrMatrix) {
  let sum1 = 0, sum2=0;
  for (let i = 0; i<sqrMatrix[0].length; i++){
    sum1 += sqrMatrix[i][i];
    sum2 += sqrMatrix[i][sqrMatrix.length-1-i];
  }
  return Math.abs(sum1-sum2);
  
}
console.log(diagonalDifference(squareMatrix));
console.log(diagonalDifference(squareMatrix1));
module.exports = { diagonalDifference };
