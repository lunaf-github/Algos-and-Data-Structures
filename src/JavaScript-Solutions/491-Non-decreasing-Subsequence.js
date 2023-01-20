/*
491. Non-decreasing Subsequences

Given an integer array nums, return all the different possible non-decreasing 
subsequences of the given array with at least two elements. You may return the 
answer in any order.

Example 1:
  Input: nums = [4,6,7,7]
  Output: [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
Example 2:
  Input: nums = [4,4,3,2,1]
  Output: [[4,4]]

Constraints:
1 <= nums.length <= 15
-100 <= nums[i] <= 100
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var findSubsequences = function(nums) {

 const res = [];
 const subArray = [];
 
 function dfs(start){
     if(subArray.length > 1) res.push([...subArray]); 
     const used = new Set();
     for(let i = start; i < nums.length; i++){
         if(used.has(nums[i]) || nums[i] < subArray[subArray.length - 1]) continue;
         subArray.push(nums[i]);
         used.add(nums[i]);
         dfs(i + 1);
         subArray.pop();
     }
 }
 
 dfs(0);
 
 return res;
};
