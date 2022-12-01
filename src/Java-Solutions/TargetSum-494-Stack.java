class Solution {
    int result = 0;
    public int findTargetSumWays(int[] nums, int target) {
        if(nums == null || nums.length == 0) return result;
        dfs(nums, target, 0, 0);
        return result;
    }

    private void dfs(int[] nums, int target, int pos, int sum){
        if(pos == nums.length){
            if(sum == target) result++;
            return;
        }

        dfs(nums, target, pos + 1, sum + nums[pos]);
        dfs(nums, target, pos + 1, sum - nums[pos]);
    }
}