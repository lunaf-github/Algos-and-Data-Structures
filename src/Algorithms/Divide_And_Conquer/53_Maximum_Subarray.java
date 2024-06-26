class Solution {
    public int maxSubArray(int[] nums) {
        return divideAndConquer(nums, 0, nums.length - 1);
    }

    public int divideAndConquer(int[] nums, int left, int right) {
        if (left > right)
            return Integer.MIN_VALUE;

        int mid = left + (right - left) / 2;
        int leftHalfMaxSum = 0;
        int rightHalfMaxSum = 0;

        int curSum = 0;
        for (int i = mid - 1; i >= left; i--) {
            curSum += nums[i];
            leftHalfMaxSum = Math.max(leftHalfMaxSum, curSum);
        }

        curSum = 0;
        for (int i = mid + 1; i <= right; i++) {
            curSum += nums[i];
            rightHalfMaxSum = Math.max(rightHalfMaxSum, curSum);
        }

        int midSubArrMaxSum = leftHalfMaxSum + nums[mid] + rightHalfMaxSum;
        int leftSubArrMaxSum = divideAndConquer(nums, left, mid - 1);
        int rightSubArrMaxSum = divideAndConquer(nums, mid + 1, right);

        return Math.max(Math.max(leftSubArrMaxSum, rightSubArrMaxSum), midSubArrMaxSum);
    }
}
