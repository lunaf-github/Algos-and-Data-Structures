/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsetsWithDup = function(nums) {
 nums.sort();
 const res = [];
 const sub = [];
 
 function dfs(start){
     res.push([...sub]);
     
     for(let i = start; i < nums.length; i++){
         if(i > start && nums[i] === nums[i - 1]) continue;
         sub.push(nums[i]);
         dfs(i + 1);
         sub.pop();
     }
 }
 
 dfs(0);
 
 return res;
 
};


 // sort nums in accending order
 // declare res array
 // declare subarray
 
 //helper(start)

     // push current subarray to res
     // loop from i = start to lastindex
         //if i > start && current ith element is equal to prevous elemnt, skip to next element 
         //push ith element to subarray
         //invoke helper(start + 1)
         //clean up, remove ith element from subarray