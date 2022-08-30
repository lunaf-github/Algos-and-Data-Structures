/* Binary Search

Find the middle index of the array.
See whether the middle element is less than the element at the right of it.
If it is, then reduce the array to the right, if not, reduce the array towards the left.
Repeat upntil the left is equal to right.
Return right (or left) - doesn't matter since both left and right are equal to each other.
*/

class Solution {
    public int findPeakElement(int[] nums) {
        int left = 0;
        int right = nums.length - 1;

        while (left < right){
            int mid = left + (right - left)/2;
            if ( nums[mid + 1]> nums[mid]) left = mid + 1;
            else right = mid;
        }

        return right;
    }
}