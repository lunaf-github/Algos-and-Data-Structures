/*
329. Longest Increasing Path in a Matrix

Given an m x n integers matrix, return the length of the longest increasing path in matrix.

From each cell, you can either move in four directions: left, right, up, or down. You may 
not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).

Example 1:
  Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
  Output: 4
  Explanation: The longest increasing path is [1, 2, 6, 9].
Example 2:
  Input: matrix = [[3,4,5],[3,2,6],[2,2,1]]
  Output: 4
  Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
Example 3:
  Input: matrix = [[1]]
  Output: 1
 
Constraints:
  m == matrix.length
  n == matrix[i].length
  1 <= m, n <= 200
  0 <= matrix[i][j] <= 231 - 1
*/

/**
 * @param {number[][]} matrix
 * @return {number}
 */

var longestIncreasingPath = function(matrix) {
 const directions = [[0,-1],[-1,0],[0,1],[1,0]];
 const rowLength = matrix.length;
 const rowWidth = matrix[0].length;   
 const cache = Array.from(Array(rowLength), x => Array(rowWidth))

 for(const row of cache) row.fill(0);
 
 function traverse(r,c){
     if(cache[r][c] !== 0) return cache[r][c];
     let localMax = 1;   
     for(const dir of directions){       
         const deltaR = dir[0] + r;
         const deltaC = dir[1] + c;          
         if(deltaC < 0 || deltaC >= rowWidth || deltaR < 0 
            || deltaR >= rowLength || matrix[deltaR][deltaC] <= matrix[r][c]) continue;
         let pathLength = 1 + traverse(deltaR, deltaC)
         localMax = Math.max(localMax, pathLength);
     }  
     cache[r][c] = localMax;
     return localMax;
 }

 let max = 1;

 for(let r = 0; r < matrix.length; r++){
     for(let c = 0; c < matrix[0].length; c++){
         const len = traverse(r,c);
         max = Math.max(max, len);
     }
 }
 return max;
};
