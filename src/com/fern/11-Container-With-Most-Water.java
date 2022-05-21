// time complexity: O(n)
// space complexity: O(1)

// This question is confusing. They want the maximum area (smallest bar height between two points) * distance

class Solution {
    public int maxArea(int[] height) {
        int left = 0;
        int right = height.length - 1;
        int max = 0;
        int currMax = 0;

        while(left < right){
            int dist = right - left;
            if(height[left] < height[right]){
                currMax = height[left]*dist;
                left++;
            }else{
                currMax = height[right]*dist;
                right--;
            }

            max = Math.max(max, currMax);
        }

        return max;
    }
}