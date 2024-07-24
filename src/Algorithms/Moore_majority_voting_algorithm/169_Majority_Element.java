class Solution {
    public int majorityElement(int[] nums) {
        int majorityEl = -1;
        int votes = 0;

        for (int num : nums) {
            if (votes <= 0) {
                majorityEl = num;
            }

            if (num == majorityEl) {
                votes++;
            } else {
                votes--;
            }
        }

        votes = 0;
        for (int num : nums) {
            if (num == majorityEl) {
                votes++;
            }
        }

        if (votes >= (nums.length / 2))
            return majorityEl;
        return -1;
    }
}