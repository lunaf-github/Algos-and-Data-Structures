// time complexity = O(2n) = O(n)
// space complexity = 0(1); As stated in the problem, the output does not count in the space
// complexity analysis.

class Solution {
    public int[] productExceptSelf(int[] nums) {
        int[] res = new int[nums.length];

        res[0] = 1;

        // multiplies previous num and res position and stores it at the current res array
        for(int i = 1; i < nums.length; i++) res[i] = res[i - 1] * nums[i - 1];

        int right = 1;

        // similar to previous array, but backwards.
        for(int i = nums.length - 1; i >= 0; i--){
            res[i] *= right;
            right *= nums[i];
        }

        return res;
    }
}