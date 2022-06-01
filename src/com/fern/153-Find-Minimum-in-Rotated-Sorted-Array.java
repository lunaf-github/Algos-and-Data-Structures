// Time complexity: O(logn);
// Space complexity: O(1);

class Solution {
    public int findMin(int[] nums) {

        int left = 0;
        int right = nums.length;
        int min = nums[left];

        while(left <= right){
            int mid = left + (right - left)/2;

            // min = Math.min(min, nums[mid]);
            min = min > nums[mid] ? nums[mid] : min ;

            if(nums[left] < nums[mid]) left = left + 1;
            else right = right - 1;
        }

        return min;
    }

}