/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
    let write = 0;
    for (let read = 0; read < nums.length; read += 1) {
        if (nums[read] !== 0) {
            const tmp = nums[write];
            nums[write] = nums[read];
            nums[read] = tmp;
            write++;
        }
    }

    return nums;
};