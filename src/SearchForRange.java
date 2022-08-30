package com.fern;
class SearchForRange {

    //We need to run the binary search twice. Once to find the start, and the second time to
    //find the end.
    //After the first binary search, which finds the start, we will need to perform a check
    //If the start index is equal to the length of the input array or the value in the start
    //index is not equal to the target, then return [-1,-1]
    //if those checks pass, run the second binary search. This time, we look for value that is
    //one unit higher than the target. Once we find it, we move once to the left and that should
    //be your end.

    public int[] searchRange(int[] nums, int target) {
        int start = Solution.findMin(nums, target);
        if (start == nums.length || nums[start] != target) return new int[] {-1,-1};
        return new int[] {start, Solution.findMin( nums, target + 1) - 1};

    }

    //This is the main part of this problem. The binary search. We set the low to zero and hi to the length of
    //the array. The reason why we don't have the hi equal to the last index (nums.length -1) is because we
    // need to consider the test case where we have an array input length of one. That way, the low and hi won't
    // equal to zero at the same time.

    private static int findMin(int[] nums, int target){
        int low = 0;
        int hi = nums.length;
        while (low < hi){
            int mid = low + (hi - low)/2;
            if(nums[mid] < target) low = mid + 1;
            else hi = mid;
        }
        return hi;
    }
}
}
