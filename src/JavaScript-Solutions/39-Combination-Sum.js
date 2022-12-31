/**
 * Clarification questions to interviewer
 * 
 * Problem: 
 * Given an array of distinct integers candidates and a target integer 
 * target, return a list of all unique combinations of candidates where 
 * the chosen numbers sum to target. 
 * 
 * Questions:
 * 1. Distict, as in all numbers are unique?
 * 2. Does order of each combination set matter?
 * 3. Since we are dealing with combinations, two combinations are the same
 *    if they have the same numbers, but in different order?
 * 4. What is the smallest and largest input array? 
 * 5. Is it garanteed that there will be at least one combination that sums to 
 *    the target?
 * 6. can we choose the same number multiple times? 
 */

//bruteforce
/** 
given: candidates = [2,3,5], target = 8
                                 []
                        /         |     \
                     2            3      5
                /  |    \       / |   
              2    3     5     3  5     
            /|\   /|     |   /|          
           2 3 5 3 5    5 2 3 5
          /        
         2      
         
 notice in line 27 and 29 that the we need to change that starting point of 
 interation for each recursion. 
*/
 
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
 const res = [];
 const sub = [];
 let sum = 0;
 
 function helper(start){
     if(sum === target){
         res.push([...sub]);
         return;
     }
     
     if(sum > target) return;
     
     for(let i = start; i < candidates.length; i++){
         const num = candidates[i];
         sub.push(num);
         sum += num
         helper(i);
         sub.pop();
         sum -= num;
     }
 }
 
 helper(0);
 
 return res;
};