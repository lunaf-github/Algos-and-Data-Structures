/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var setZeroes = function(matrix) {
 const n = matrix.length;
 const m = matrix[0].length;
 
 let topLeft = 1;
 
 for(let r = 0; r < n; r++){
     if(matrix[r][0] === 0) topLeft = 0;
     for(let c = 1; c < m; c++){
         if(matrix[r][c] === 0){
             matrix[r][0] = 0;
             matrix[0][c] = 0;
         }
     }
 }

 
 for(let r = n - 1; r >= 0; r--){
     for(let c = m - 1; c >= 1; c--){
         if(matrix[0][c] === 0 || matrix[r][0] === 0){
             matrix[r][c] = 0;
         }
     }
     
     if(topLeft === 0) matrix[r][0] = 0; 
 }
 
 
};