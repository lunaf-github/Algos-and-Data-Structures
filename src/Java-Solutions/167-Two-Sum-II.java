
class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int left = 0;
        int right = numbers.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int sum = numbers[left] + numbers[right];

            if (sum == target)
                return new int[] { left + 1, right + 1 };

            if (sum > target) {
                if (numbers[left] + numbers[mid] > target) {
                    right = mid - 1;
                } else {
                    right -= 1;
                }
            } else {
                if (numbers[mid] + numbers[right] < target) {
                    left = mid + 1;
                } else {
                    left += 1;
                }
            }
        }

        return new int[] { 0, 0 };
    }
}
