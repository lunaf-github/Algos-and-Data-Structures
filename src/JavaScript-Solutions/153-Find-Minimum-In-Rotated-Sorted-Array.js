/**
 * @param {number[]} nums
 * @return {number}
 */


var findMin = function(nums) {
 let minimum = nums[0];
 let left = 0;
 let right = nums.length - 1;
 
 while(left <= right){
     const mid = left + Math.floor((right - left)/2);
     minimum = Math.min(minimum, nums[mid]);
     
     if(nums[mid] < nums[right]){
         right = mid - 1;
     }else{
         left = mid + 1;
     }
 }
 
 return minimum;
};