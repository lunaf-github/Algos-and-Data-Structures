/**
 * Vague Interview Question:
 * Given an integer numRows, return the first numRows 
 * of Pascal's triangle.
 * 
 * Questions to interviewer:
 * 1. Return first 3 numRows, does this include numRow itself?
 * 2. Return as an array?
 */

/**
118. Pascal's Triangle

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly 
above it as shown:

Example 1:
  Input: numRows = 5
  Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:
  Input: numRows = 1
  Output: [[1]]

Constraints:
  1 <= numRows <= 30
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function(numRows) {
 const res = [];
 
 for(let i = 0; i < numRows; i++){
     const sub = [];
     sub.push(1);
     
     let l = 0;
     let r = 1;
     
     while(r < i){
         const sum = res[i - 1][l] + res[i-1][r];
         sub.push(sum);
         l++;
         r++;
     }
     
     if(i > 0 ) sub.push(1);
     
     res.push(sub);
 }
 return res;
};