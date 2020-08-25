//8/24/2020
/**
 * @param {number[]} intArr an array of integers
 * @param {number} i index, which defaults to 0
 * @return {number} the sum of all the elements
 */

function iterArr(arr) {
  //your code here 
  var sum = 0;
  for(var i=0; i < arr.length; i++){
      sum = sum + arr[i];
  }
  return sum; 
}


function rSumArray(arr, i = 0) {
  if (i == arr.length) {
      return 0;
  }
  return arr[i] + rSumArray(arr, i + 1);
}

console.log(rSumArray([1, 4, 6])); // should log 11
console.log(rSumArray([2, -4, 6])); // should log 4
console.log(rSumArray([2, -4, 6], 1)); // should log 2

/**
 * @param {number} num
 * @return {number} the sum from one up to and including the number
 */

function rSigma(num) {

  /* base case */
  
  if (num == 0) {
    return num;
  }
  
  return num + rSigma(num - 1);
  }
  
console.log(rSigma(4)); // should log 10 (1 + 2 + 3 + 4)
console.log(rSigma(5)); // should log 15 (1 + 2 + 3 + 4 + 5)


//Morley's lecture code
function rLoopThroughAndLog (arr, i=0){
  //base case
  // this is where we will stop the recursion
  if (i == arr.length) return;
  console.log(arr[i]);
  //this is the recursive call
  // the function calls itself
  rLoopThroughAndLog(arr, i+1);
  // the i + 1 is what we call "forward movement"
}