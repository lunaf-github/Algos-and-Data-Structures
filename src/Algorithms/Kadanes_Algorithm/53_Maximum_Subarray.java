class Solution {
    public int maxSubArrayV2(int[] nums) {
        int maxSum = nums[0];
        int curSum = 0;

        for (int num : nums) {
            curSum = Math.max(curSum, 0);
            curSum += num;
            maxSum = Math.max(curSum, maxSum);
        }

        return maxSum;
    }

    public int maxSubArrayV1(int[] nums) {
        int maxSum = nums[0];
        int curSum = 0;

        for (int num : nums) {
            if (curSum < 0) {
                curSum = 0;
            }

            curSum += num;

            if (curSum > maxSum) {
                maxSum = curSum;
            }
        }

        return maxSum;
    }
}
