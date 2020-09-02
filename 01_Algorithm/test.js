/* 
  Stable sort

  Visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/

  Time Complexity
    - Best case:    O(n log(n)) linearithmic
    - Average case: O(n log(n)) linearithmic
    - Worst case:   O(n log(n)) linearithmic

  Space: O(n) linear

  steps:
    1. create a merge function to merge two already sorted arrays into a single sorted array
      - you do NOT need to work in place, ok to use a new array
    2. create mergeSort function to sort the provided array
      - split the array in half and recursively merge the halves using the previously created merge function
      - splitting of arrays stops when array can no longer be split
      - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array
*/

// merge
const sortedA = [1, 2, 4, 5, 6, 9];
const sortedB = [3, 7, 8, 10];
const expectedMerge = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Merges two already sorted arrays into a new sorted array
 * @param   {Array<number>} left
 * @param   {Array<number>} right
 *          @left and @right are sorted
 * @return  {Array<number>}
 *          A new sorted array containing all the elements of @left and @right
 * Time:    O(...)
 * Space:   O(...)
 */
//            i         j
 // [0, 1, 2]    [0, 1, 5]     [0, 0, 1, 1, 2, 5]
function merge(left, right) {
  for (let i = 0; i<arr.length; i++){
    if (left[0] <= right[0]){
      left.push(right[0]);
    } else {right.push(left[0]);}
  }
  return left;
}
// mergeSort
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Creates a new sorted array based on the given nums being recursively split and merged
 * @param   {Array<number>} nums
 *          In any order
 * @return  {Array<number>}
 *          New sorted array
 * Best:    O(n log(n)) linearithmic
 * Avg:     O(n log(n)) linearithmic
 * Worst:   O(n log(n)) linearithmic
 */
//  nums.length <= 1       nums
//  nums.length > 1        [left] [right]
function mergeSort(nums) {
  for (let i = 0; i<arr.length; i++){
    f
  }



}

module.exports = { merge, mergeSort };


function merge(left, right) {
  let retr = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    // ...
    if (left[i] <= right[j]) {
      retr[i + j] = ...//
      i++;
    } else {
      retr[i + j] = ...//
      j++;
    }
  }

  // i === left.length || j === right.length
  while (i < left.length) {
    // j === right.length
    // paste the rest of left
  }
  while (j < right.length) {
    // i === left.length
    // paste the rest of right
  }

  /*
  for (let i = 0; i<right.length; i++){
      left.push(right[i]);
  }
  */


  return left;
}
