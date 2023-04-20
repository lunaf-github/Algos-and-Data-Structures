/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
 const map = new Map();
 const maxHeap = new MaxPriorityQueue();
 const res = [];
 
 var l = 0;
 
 for (let r = 0; r < nums.length; r+=1) {
     let windowLength = r - l + 1;
     let rightValue = nums[r];
     let leftValue = nums[l];
     
     if (!map.has(rightValue)) {
         map.set(rightValue, 0);
     }
     
     map.set(rightValue, map.get(rightValue) + 1);
     
     maxHeap.enqueue(rightValue);
     
     if (windowLength === k) {
         
         while (!map.has(maxHeap.front().element)) {
             maxHeap.dequeue();
         }
         
         res.push(maxHeap.front().element);
         
         if (map.get(leftValue) === 1) {
             map.delete(leftValue);
         } else {
             map.set(leftValue, map.get(leftValue) - 1);
         }
         
         l += 1
     }
     
 }
 
 return res;
 
};

//  r = continously moving
//  l = only moves if windowLength = k
//  distance: 3
//  windowLength: 4


// each r movement until r reaches end of array, 
//     1. add r value to set and maxHeap

// if windowLength = k, then 
//  1. push(max value in interval) to result array
//  2. delete value l from set
//  3. while maxHeap root is not in set, remove root
//  4. increment l pointer