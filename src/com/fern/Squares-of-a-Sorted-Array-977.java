class Solution {
    public int[] sortedSquares(int[] nums) {
        int length = nums.length;
        int[] result = new int[length];
        int j = length -1;
        int i = 0;
        for(int p = j; p >= 0; p--){
            if (Math.abs(nums[i]) > Math.abs(nums[j])){
                result[p] = nums[i]*nums[i];
                i++;
            }else{
                result[p] = nums[j]*nums[j];
                j--;
            }
        }
        return result;
    }
}