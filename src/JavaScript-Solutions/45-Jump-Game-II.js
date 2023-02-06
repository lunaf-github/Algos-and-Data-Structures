//greedy
//TC: O(n)
//SC: O(1)


// try to find the furthest index we can jump. This will be our new right pointer
// The left pointer will be the index next to right


/**
 * @param {number[]} nums
 * @return {number}
 */

var jump = function(nums) {
 let farthest = 0; 
 let l = 0; 
 let r = 0;
 let steps = 0;
 
 
 while(r < nums.length - 1){
     
     for(let i = l ; i <= r; i++){
         farthest = Math.max(farthest, i + nums[i])
     }
     l = r + 1;
     r = farthest;
     steps++;
 }
 
 return steps;
};
