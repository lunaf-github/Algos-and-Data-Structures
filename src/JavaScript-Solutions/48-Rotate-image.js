/**
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
DO NOT allocate another 2D matrix and do the rotation.

Example 1:
  Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
  Output: [[7,4,1],[8,5,2],[9,6,3]]
Example 2:
  Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
  Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 
Constraints:
n == matrix.length == matrix[i].length
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000
*/


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {

 let left = 0;
 let right = matrix.length - 1;
 
 while(left < right){

     for(let i = 0 ; i < right - left ; i++){

         let top = left;
         let bottom = right;
         
         
         let topLeft = matrix[top][left + i];

         // buttomleft to top left
         matrix[top][left + i] = matrix[bottom - i][left];
         
         // buttomRight to buttomLeft
         matrix[bottom -  i][left] = matrix[bottom][right - i];
         
         // topRight to buttomRight      
         matrix[bottom][right - i] = matrix[top + i][right];
         // topLeft to topRight
         matrix[top + i][right] = topLeft;
     }
     left++;
     right--;
 }
 
 return matrix;
};

// on line 12, for(let i = left; i < right; i++) doesn't work because in the second layer. 
// When we start on left = 1, the topLeft value will be incorrect. matrix[top][left + i] => matrix[1][1 + 1] istead of matrix[1][1 + 0];


//     latIndex = n - 1;
 
//     loop layer = 0  to  floor(n/2)
//          loop from i = layer to n - 2 - layer
//              tmp = matrix[layer][i]

//              buttomLeft = matrix[(n - 1) - i][layer] to topLeft =  matrix[layer][i]

//              buttomRight = matrix[(n-1)-layer][(n-1) - i]  to buttomLeft = matrix[(n -1) - i][layer]

//              topRigth = matrix[i][(n -1) - layer] to buttromRight = matrix[(n-1)-layer][(n-1) - i] 
      
