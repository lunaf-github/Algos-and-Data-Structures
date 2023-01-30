/**
 * Vague interview questions:
 * Given an array nums of distinct integers, return all the possible 
 * permutations. You can return the answer in any order.
 * 
 * Questions:
 * 1. Confirm the definition of permutation. 
 * 2. Each permutation includes all numbers in the input array?
 * 3. Each permutation is the same length as the input array?
 * 4. What is the largest input array that will be give?
 * 5. What is the smallest input array?
 * 
 * High level strategy:
 * 1. DFS - recursion
 * 2. create a hashset
 * 3. create a helper function - will be used for recursion: parameters()
 *      Base case: subArray.length == input.length, push copy to res array   
 *      iterate from index 0 to n
 *      skip number if num is in set
 *      add current number to hashset
 *      add current number to subarray
 *      call rucursive function using
 *      remove current number from hashset
 *      remove current number from subarray
 * 4. return result array  
 

                 []
               /  |  \
             1    2    3
            /\   / \  / \
           2  3  1 3  2 1
           |  |  | |  | |  
           3  2  3 1  1 2

*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var permute = function(nums) {
 const set = new Set();
 const res = [];
 const sub = [];
 
 function dfs(){
     if(sub.length === nums.length){
       res.push([...sub]);
       return;
     } 
     
     for(const num of nums){
         if(set.has(num)) continue;
         
         set.add(num);
         sub.push(num);
         
         dfs();
         
         set.delete(num);
         sub.pop();
     }
 }
 
 dfs();
 return res;
};