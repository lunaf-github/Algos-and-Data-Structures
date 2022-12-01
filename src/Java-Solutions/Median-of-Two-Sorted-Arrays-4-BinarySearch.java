/*Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

Example
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5

 */

class Solution {

    // the array on the first paramenter must be less, if not then switch the arrays around to make sure the first parameter is the least one
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        if(nums1.length > nums2.length){
            findMedianSortedArrays(nums2, nums1);
        }

        /*
        first, partition the first array in half. then partition the other array in half by adding up the lengths of both arrays and
        dividing it by two.
        */

        int x = nums1.length;
        int y = nums2.length;
        int lo = 0;
        int hi = x;

        while (lo <= hi){
            int partitionX = (lo + hi)/2;
            int partitionY = (x + y)/2 - partitionX;

            int maxLeftX = (partitionX == 0) ? Integer.MIN_VALUE : nums1[partitionX - 1];
            int minRightX = (partitionX == x) ? Integer.MAX_VALUE : nums1[partitionX];

            int maxLeftY = (partitionY == 0) ? Integer.MIN_VALUE : nums1[partitionY -1];
            int minRightY = (partitionY == y) ? Integer.MAX_VALUE : nums1[partitionY];

            if (maxLeftX <= minRightY && maxLeftY <= minRightX){
                if((x + y) % 2 == 0) return (Math.max(maxLeftX,maxLeftY) + Math.min(minRightX,minRightY))/2;
                else Math.min(minRightX,minRightY);
            }

            if(maxLeftX > minRightY) lo = partitionX--;
            else hi = partitionY--;

        }

        return -1;


    }
}