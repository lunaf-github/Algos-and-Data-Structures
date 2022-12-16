function maxSubArray(nums){
  let max = nums[0];
  let curSum = 0;

  nums.forEach(num => {
    curSum += num;
    max = Math.max(curSum, max);
    if(curSum < 0) curSum = 0;
  })

  return max;
}

console.log(maxSubArray([-1,5,3,3])) // 5