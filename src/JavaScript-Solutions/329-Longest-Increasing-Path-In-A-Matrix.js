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
 const width = matrix[0].length;
 const length = matrix.length;
 const directions = [[0,-1],[0,1],[1,0],[-1,0]];
 const cache = Array.from(Array(length), row => Array(width));
 
 for(const row of cache) row.fill(0);
 
 function dfs(r,c){
     if(cache[r][c] !== 0) return cache[r][c];
     
     let len = 1;
     
     for(const dir of directions){
         const deltaR = dir[0] + r;
         const deltaC = dir[1] + c;
         
         if(deltaR < 0 || deltaC < 0
           || deltaR >= length || deltaC >= width
           || matrix[deltaR][deltaC] <= matrix[r][c]) continue;
         
         len = Math.max(len, 1 + dfs(deltaR, deltaC));
     }
     cache[r][c] = len;
     return len;
 }
 
 let longestPath = 1;
 
 for(let r = 0; r < length; r++){
     for(let c = 0; c < width; c++){
         const currentPath = dfs(r,c);
         longestPath = Math.max(longestPath, currentPath);
     }
 }
 
 return longestPath;
};
