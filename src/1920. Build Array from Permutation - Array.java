
// Java
class Solution {
    public int[] buildArray(int[] nums) {
        // Declare an empty result array with length of nums
        int[] result = new int[nums.length];
        // for loop from 0 to last index
        for (int i = 0; i < nums.length; i++){
            // get value of element at the ith position and use it as a new index
            // get value of elmennt of new index and add it to the result array at ith position
            result[i] = nums[nums[i]];
        }
        // return result
        return result;
    }
}

// JavaScript
const buildArray = function(nums) {
    let result = [];
    for(let i = 0; i < nums.length; i++){
        result.push(nums[nums[i]]);
    }
    return result;
};