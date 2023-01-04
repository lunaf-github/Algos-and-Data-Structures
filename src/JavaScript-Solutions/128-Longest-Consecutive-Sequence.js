/**
 * Vague Interview Question:
 * Given an unsorted array of integers nums, return the length of 
 * the longest consecutive elements sequence.
 * 
 * Questions to interviewer:
 * 1. longest contiguous numbers in an array?
 * 2. or longest subsequence?
 * 3. or number order doesn't matter, as long as they are consecutive?
 * 4. if two numbers are equal, are they considered consecutive?
 */

/**
128. Longest Consecutive Sequence

Given an unsorted array of integers nums, return the length of the longest
consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:
  Input: nums = [100,4,200,1,3,2]
  Output: 4
  Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. 
  Therefore its length is 4.
Example 2:
  Input: nums = [0,3,7,2,5,8,4,6,0,1]
  Output: 9
 
Constraints:
  0 <= nums.length <= 105
  -109 <= nums[i] <= 109
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// add visited hashset to skip elements we already seen. Optimiztion. 

var longestConsecutive = function(nums) {
 const set = new Set();
 const visited = new Set();
 
 for(const num of nums){
     set.add(num);
 }
 
 let maxCount = 0;
 
 for(const num of nums){
     if(!set.has(num - 1)){
         let count = 0;

         while(!visited.has(num + count) && set.has(num + count)){
             visited.add(num + count)
             count++;
         }
         maxCount = Math.max(maxCount, count)
     }
 }
 return maxCount;
};
