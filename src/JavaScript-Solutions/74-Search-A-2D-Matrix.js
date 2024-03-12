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
  const MATRIX_WIDTH = matrix[0].length;
  const MATRIX_HEIGHT = matrix.length;

  let top = 0;
  let bottom = MATRIX_HEIGHT - 1;

  while (top <= bottom) {
      const verticalMid = top + Math.floor((bottom - top) / 2);

      if (matrix[verticalMid][0] <= target && 
          matrix[verticalMid][MATRIX_WIDTH - 1] >= target) return hasTarget(verticalMid);

      if (matrix[verticalMid][0] > target) {
          bottom = verticalMid - 1;
      } else {
          top = verticalMid + 1;
      }
  }

  return false;

  // **************

  function hasTarget(row) {
      const nums = matrix[row];

      let left = 0;
      let right = nums.length - 1;

      while (left <= right) {
          const mid = left + Math.floor((right - left) / 2);

          if (nums[mid] === target) return true;

          if (nums[mid] > target) {
              right = mid - 1;
          } else {
              left = mid + 1;
          }
      }

      return false;
  }
};

/**
 * Clarification questions for Interviewer:
 * Are the numbers sorted? How are they sorted?
 * What is the smallest and largest expected matrix size?
 * Are there duplicate numbers?
 * Is it only numbers, or are there other types of characters?
 * What is the return value, a boolean or index location?
 */