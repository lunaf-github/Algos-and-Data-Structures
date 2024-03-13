// Time Complexity: O(logN + LogM))
// space Complexity: O(1)

class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        final int MATRIX_HEIGHT = matrix.length;
        final int MATRIX_WIDTH = matrix[0].length;

        int top = 0;
        int bottom = MATRIX_HEIGHT - 1;

        while (top <= bottom) {
            int mid = top + (bottom - top) / 2;

            if (matrix[mid][0] <= target && matrix[mid][MATRIX_WIDTH - 1] >= target) {
                return hasTarget(matrix[mid], target);
            }

            if (matrix[mid][0] > target) {
                bottom = mid - 1;
            } else {
                top = mid + 1;
            }
        }

        return false;
    }

    public boolean hasTarget(int[] nums, int target) {

        int left = 0;
        int right = nums.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] == target)
                return true;

            if (nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return false;
    }
}