var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currentSum = 0;
    
    nums.forEach( num => {
        currentSum = Math.max(currentSum, 0);
        currentSum += num;       
        maxSum = Math.max(currentSum, maxSum);
    })
    
    return maxSum;
};