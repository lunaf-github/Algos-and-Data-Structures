class Solution {
    public int[] sortArray(int[] nums) {
        if(nums.length <= 1) return nums;
        int midPoint = nums.length/2;
        int[] leftList = sortArray(Arrays.copyOfRange(nums, 0, midPoint));
        int[] rightList = sortArray(Arrays.copyOfRange(nums, midPoint, nums.length));
        return merge(leftList, rightList);
    }

    public int[] merge(int[] leftList , int[] rightList){
        int[] res = new int[leftList.length + rightList.length];
        int leftPointer = 0;
        int rightPointer = 0;
        int resPointer = 0;

        while(leftPointer < leftList.length && rightPointer < rightList.length){
            if(leftList[leftPointer] < rightList[rightPointer]){
                res[resPointer++] = leftList[leftPointer++];
            }else{
                res[resPointer++] = rightList[rightPointer++];
            }
        }

        while(leftPointer < leftList.length){
            res[resPointer++] = leftList[leftPointer++];
        }

        while(rightPointer < rightList.length){
            res[resPointer++] = rightList[rightPointer++];
        }

        return res;
    }
}