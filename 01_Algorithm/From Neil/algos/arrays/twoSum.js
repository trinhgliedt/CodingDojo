// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg

/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  Bonus: Make it O(n) time
*/

const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;

// Order doesn't matter. Explanation: nums[0] + nums[2] = 2 + 7 = 9
const expected1 = [0, 2];

/**
 * Finds the numbers that add up to @targetSum
 * @param  {Array<number>} nums - Any order
 * @param  {number} targetSum
 * @return {Array<number>}
 *         The two indexes of the numbers in @nums that add up to @targetSum
 * Time:   O(...)
 * Space:  O(...)
 */
function twoSum(nums, targetSum) {
  let sum=0;
  let i=0, result = []; 
  while (sum <= targetSum && i < nums.length){
      if (nums[i] < targetSum && (sum + nums[i]) <= targetSum) {
          sum += nums[i];
          result.push(i);
        }
      i++;
  }
  if (sum > targetSum){
      result.pop();
  }
  if (sum == targetSum){
      return result;
    }
  return result;

}

const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;
console.log(twoSum(nums1, targetSum1));

module.exports = { twoSum };
