// Java
// There is no concat method for arrays

class Solution {
    public int[] getConcatenation(int[] nums) {
        // declare a length variable and set it to the length of nums
        int length = nums.length;
        // declare an empty result array with 2 times the length of nums
        int[] result = new int[length * 2];
        // for loop from index 0 to the last index of nums array
        for(int i = 0; i < nums.length; i++){
            // Get the ith element of nums and added a copy to the ith position of the result array
            result[i] = nums[i];
            // add the same element to the result array at the  ith + length position
            result[i + length] = nums[i];
        }
        // return result
        return result;
    }
}

// JavaScript

var getConcatenation = function(nums) {
    return nums.concat(nums);
};