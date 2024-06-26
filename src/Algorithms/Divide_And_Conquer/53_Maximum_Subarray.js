var maxSubArray = function(nums) {

    return divide(0, nums.length - 1);

    // *********************************
    function divide(left, right) {

        if (left > right) return -Infinity;

        const mid = left + Math.floor((right - left) / 2);

        let curSum = 0;
        let leftMaxSum = 0;
        let rightMaxSum = 0;
    
        for (let i = mid - 1; i >= left; i--) {
            curSum += nums[i];
            leftMaxSum = Math.max(leftMaxSum, curSum); 
        }

        curSum = 0;
        for (let i = mid + 1; i <= right; i++) {
            curSum += nums[i]
            rightMaxSum = Math.max(rightMaxSum, curSum);
        }


        const leftDivisionSum = divide(left, mid - 1);
        const rightDivisionSum = divide(mid + 1, right);
        const midSum = leftMaxSum + nums[mid] + rightMaxSum;

        return Math.max(leftDivisionSum, rightDivisionSum, midSum);
    }


};