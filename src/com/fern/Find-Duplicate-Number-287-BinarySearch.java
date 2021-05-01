/*
We will use binary search and the Pigeonhole Principle. If we have n number of containers and m number of items.
If m>n, then there is more than one item in a cointainer. So, in this problem we will use a counter. If the number of
elements is less than or equal to the mid, then the duplicates must be on the right half. So we will move the left pointer to the right.
Otherwise, we move the right pointer to the left.

Template 2, Binary search

*/

class Solution {
    public int findDuplicate(int[] nums) {
        int left = 1;
        int right = nums.length - 1;

        while (left < right){
            int counter = 0;
            int mid = left + (right - left)/2;

            for (int i : nums) {
                if (i <= mid) counter ++;
            }
            if (counter <= mid) left = mid + 1;
            else right = mid;
        }
        return left;
    }
}