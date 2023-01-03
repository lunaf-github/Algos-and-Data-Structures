/**
 * Vague questions:
 * Given an integer array nums and an integer k, return the k most frequent elements. 
 * 
 * Questions:
 * 1. Return is an array?
 * 2. Does order matter?
 * 3. What is the shortest input array that will be given?
 * 4. Is there more than one possible answer?
 * 
 * Test Cases:
 * 1. [1,1,1,1,1] k = 1
 * 2, [1,1,1,2,2,3] k = 2
 * 3. [1] k= 2
 */

/** 
347. Top K Frequent Elements

Given an integer array nums and an integer k, return the k most frequent elements. 
You may return the answer in any order.

Example 1:
  Input: nums = [1,1,1,2,2,3], k = 2
  Output: [1,2]
Example 2:
  Input: nums = [1], k = 1
  Output: [1]
 
Constraints:
  1 <= nums.length <= 105
  -104 <= nums[i] <= 104
  k is in the range [1, the number of unique elements in the array].
  It is guaranteed that the answer is unique.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function(nums, k) {
 const res = [];
 const map = new Map();
     
 for(const num of nums){
     map.set(num, (map.get(num) + 1 || 1))
 }
 
 const buckets = Array.from(Array(nums.length + 1), x => []);
 
 for(const key of map.keys()){
     buckets[map.get(key)].push(key);
 }
 
 
 for(let i = buckets.length - 1; i > 0; i--){
     if(buckets[i].length === 0) continue;
     while(buckets[i].length !== 0 && res.length !== k){
         res.push(buckets[i].pop());
     }
 }
 
 return res;
     
};