// Time Complexity: O(logN + LogM))
// space Complexity: O(1)

class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int matrixWidth = matrix[0].length;
        int matrixHeight = matrix.length;
        int targetRow = 0;
        int topRow = 0;
        int botRow = matrixHeight - 1;

        while(topRow <= botRow){
            int midRow = topRow + (botRow-topRow)/2;

            if(target > matrix[midRow][matrixWidth - 1]) topRow = midRow + 1;
            else if (target < matrix[midRow][0]) botRow = midRow - 1;
            else {
                targetRow = midRow;
                break;
            }
        }

        int left = 0;
        int right = matrixWidth - 1;

        if(target > matrix[targetRow][right] || target < matrix[targetRow][left]) return false;

        while(left <= right){
            int mid = left + (right - left)/2;

            if(matrix[targetRow][mid] == target) return true;

            if(matrix[targetRow][mid] < target){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }

        return false;

    }
}