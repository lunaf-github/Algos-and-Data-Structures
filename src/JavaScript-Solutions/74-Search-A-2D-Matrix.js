/** 
74. Search a 2D Matrix

Write an efficient algorithm that searches for a value target in an m x n 
integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
 
Example 1:
  Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
  Output: true
Example 2:
  Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
  Output: false
 
Constraints:
  m == matrix.length
  n == matrix[i].length
  1 <= m, n <= 100
  -104 <= matrix[i][j], target <= 104
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
 //binary search on the left side rows
 const width = matrix[0].length;
 const length = matrix.length;
 
 let top = 0;
 let bottom = length - 1;
 
 while(top <= bottom){
     const rowMid = top + Math.floor((bottom - top)/2);
     
     if(matrix[rowMid][0] === target || matrix[rowMid][width - 1] === target) return true;
     //if mid is less than our target and right num is greater than target
     if(matrix[rowMid][0] < target && matrix[rowMid][width - 1] > target){
         //then binary search this row
         let left = 0;
         let right = width - 1;
         
         while(left <= right){
             const colMid = left + Math.floor((right - left)/2);
             
             if(matrix[rowMid][colMid] === target) return true;
             
             if(matrix[rowMid][colMid] > target) right = colMid - 1;
             else left = colMid + 1;
         }
         return false;
     }
     //if mid is less than our target, and right num is less than target
     if(matrix[rowMid][0] < target){
         //then move top pointer to mid + 1;
         top = rowMid + 1;
     }else{
         //else move right pointer to mid - 1;
         bottom = rowMid - 1;
     }
 }
 return false; 
};

/**
 * Clarification questions for Interviewer:
 * Are the numbers sorted? How are they sorted?
 * What is the smallest and largest expected matrix size?
 * Are there duplicate numbers?
 * Is it only numbers, or are there other types of characters?
 * What is the return value, a boolean or index location?
 */