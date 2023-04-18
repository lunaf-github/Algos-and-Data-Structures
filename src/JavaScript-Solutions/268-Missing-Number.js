/**
 * @param {number[]} nums
 * @return {number}
 */


var missingNumber = function(nums) {
 var missing = 0;
 for (let i = 0; i <= nums.length; i++) {
     let xor = i ^ nums[i];
     missing = missing ^ xor;  
 }
 return missing;
};


/**
A number xOr by itsef is always zero. 
1 ^ 1 = 0
2 ^ 2 = 0
3 ^ 3 = 0

If we switch up the order, we still have 0 

*/