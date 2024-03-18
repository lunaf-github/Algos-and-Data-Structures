class MoveZeroes {
    public void moveZeroes(int[] nums) {
        int write = 0;

        for (int read = 0; read < nums.length; read += 1) {
            if (nums[read] != 0) {
                int prevWriteVal = nums[write];
                nums[write] = nums[read];
                nums[read] = prevWriteVal;
                write += 1;
            }
        }
    }
}
