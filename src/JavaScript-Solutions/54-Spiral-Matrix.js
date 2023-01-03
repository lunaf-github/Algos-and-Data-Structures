/**
 * Vague interview Question:
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 * 
 * Questions:
 * 1. What is the smallest matrix size?
 * 2. Spiral goes clockwise or counter clockwise?
 * 3. Output is an array?
 * 
 * test cases:
 * 1. [[1]]
 * 2. [[1,2][4,3]]
 * 3. [[1,2,3][6,5,4]]
 * 4. [[1][2][3]]
 * 5. [[1,2,3]]
 * 6. [[1,2,3,4][5,6,7,8][9,10,11,12][13,14,15,16]]
 */


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
 const colLength = matrix[0].length;
 const rowLength = matrix.length;
 //create output array
 const output= [];
 
 let l = 0;
 let r = colLength;
 
 let t = 0
 let b = rowLength;
 
 while(l < r && t < b){
     // top row from l to r - 1 (right)
     for(let i = l; i < r; i++){
         output.push(matrix[t][i]);
     }
     t++;
 
     // right col from t to b - 1 (down)
     for(let i = t; i < b; i++){
         output.push(matrix[i][r-1]);
     }
     r--;
         
     if(b == t || l == r) break;

     // down row from r-1 to l (left)
     for(let i = r - 1; i >= l; i--){
         output.push(matrix[b-1][i]);
     }
     b--;
 
     // left col from b-1 to t (up)
     for(let i = b-1; i >= t; i--){
         output.push(matrix[i][l]);
     }
     l++;
 }
 
 return output
};
