/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum2 = function(candidates, target) {
 const res = [];
 const combination = [];
 
 candidates.sort((a,b) => a - b);

 dfs(0, 0);
 
 return res;
 
 // ***********************************
 
 function dfs(start, curSum) {
 
   if (curSum === target) {
       res.push([...combination]);
       return;
   }
     
   if (curSum > target) return;
    
   for (let i = start; i < candidates.length; i++) {
       let curCandidate = candidates[i];
       let newSum = curSum + curCandidate;
       
       if (i > start) {
         let prevCandidate = candidates[i - 1];
         if (curCandidate === prevCandidate) continue;
       }
       
       combination.push(curCandidate);

       dfs(i + 1, newSum);
       
       combination.pop();
   }
 }
};

