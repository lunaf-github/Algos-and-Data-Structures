/**
 * Vague Interview Question:
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
 * and such that nums[i] + nums[j] + nums[k] == 0.
 * 
 * Questions:
 * 1. Is there only one unique solution? Yes
 * 2. Is each element unique? Yes
 * 3. Does the elements exceed the range of an Integer? No
 * 4. Are there negative numbers in the array? yes
 * 5. What is the smallest and largest array size? 3 <= nums.length <= 3000  
 * 6. Is it guaranteed that there will be one solution? If not, what do I return if 
 *    there is no solution found? Guaranteed that there is a solution
 * 7. We return an array of triplets? Yes
 * 8. Target for each triplet is always zero? Yes
 * 4. Each triplet contains the value or does it contain the index of the values? Value
 */

/**
 * Test Cases:
 * 1. [0,0,0] t = 0
 * 2. [-4, 1, 8, 2, 1] 
 * 3. [1,2,3,4,5,6]
 * 4. [-3, -8, -9, -1] t=-13
 */

/**
 * High level strategy:
 * 1. To avoid cuplicate combinations, sort the input array
 * 2. Loop through the array from index 0 to n - 3
 * 3. For each iteration, perform 2sum to find the other missing values
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
 let n = nums.length;
 const res = [];
 
 nums.sort((a,b) => a - b);

 for(let i = 0; i < n - 2; i++){
     if(i > 0 && nums[i] === nums[i - 1]) continue;
     let j = i + 1;
     let k = n - 1;
     
     while(j < k){
         const sum = nums[i] + nums[j] + nums[k];
             
         if(sum > 0){
             k--;
         }else if(sum < 0){
             j++;
         }else{
           res.push([nums[i], nums[j], nums[k]]);
           while(j + 1 < n - 1 && nums[j] === nums[j + 1])j++;
           j++;
         } 
         
     }
 }
     
 return res;
};



