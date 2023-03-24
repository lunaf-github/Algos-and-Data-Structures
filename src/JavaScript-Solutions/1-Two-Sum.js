/**
 * Vague questions:
 * Given an array of integers nums and an integer target, return 
 * indices of the two numbers such that they add up to target.
 * 
 * Questions:
 * 1. Are the integers in the array in sorted order? If they are, 
 *    is it in accending or decending order?
 * 2. Is it guaranteed that two integers will equal the targer?
 * 3. Is there a unique pair that will only equal to target, or
 *    are there more than one pairs?
 * 4. return indices based on 0-indexed or 1-indexed?
 */
//
/** 
1. Two Sum

Given an array of integers nums and an integer target, return indices 
of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and 
you may not use the same element twice.

You can return the answer in any order.

Example 1:
  Input: nums = [2,7,11,15], target = 9
  Output: [0,1]
  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:
  Input: nums = [3,2,4], target = 6
  Output: [1,2]
Example 3:
  Input: nums = [3,3], target = 6
  Output: [0,1]

Constraints:
  2 <= nums.length <= 104
  -109 <= nums[i] <= 109
  -109 <= target <= 109
  Only one valid answer exists.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
 const map = new Map();
 for(let i = 0; i < nums.length; i++){
     if(map.has(nums[i])) return [i, map.get(nums[i])]
     map.set(target - nums[i], i);
 }
 return [-1,-1]
};
 
