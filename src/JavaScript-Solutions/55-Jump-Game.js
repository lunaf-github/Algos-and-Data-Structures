/**
 * Vague interview Question:
 * You are given an integer array nums. You are initially positioned at the array's first index, 
 * and each element in the array represents your maximum jump length at that position.
 * Can you reach the last index?
 * 
 * Questions:
 * 1. Do we return a boolean? True if yes, false if no?
 * 2. Is it possible to have a value of 0 in one of the indexes?
 * 3. What is the smallest input array that will be given?
 * 4. If we exceed the last index? Do we still return a true?
 * 5. We can choose to jump less than distance than the maximum allowed?
 */

/**
55. Jump Game

You are given an integer array nums. You are initially positioned at the array's first index, and 
each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

Example 1:
  Input: nums = [2,3,1,1,4]
  Output: true
  Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:
  Input: nums = [3,2,1,0,4]
  Output: false
  Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, 
  which makes it impossible to reach the last index.
 
Constraints:
  1 <= nums.length <= 104
  0 <= nums[i] <= 105
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function(nums) {
 let goal = nums.length - 1;

 
 for(let start = goal - 1; start >= 0; start--){
     const maxSteps = nums[start];
     if(start + maxSteps >= goal){
         goal = start;
     }
 }
 
 return goal === 0
};