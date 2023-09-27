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
//  2. decrement freq of value l from the freqMap. If freq is equal to 0, delete the entry from map.  
//  3. while maxHeap root is not in map, remove maxHeap root
//  4. increment l pointer



var maxSlidingWindow = function(nums, k) {
    const deque = [];
    const output = [];
    var l = 0; 
    var r = 0;
    
    while ( r < nums.length) {

        while (deque.length > 0 &&  nums[deque[deque.length - 1]] < nums[r]) {
            deque.pop()
        }
        
        deque.push(r);
        
        if (l > deque[0]) deque.shift();
        
        if (r - l + 1 >= k) {
            output.push(nums[deque[0]]);
            l += 1;
        }
        
        r += 1;
    }
    
    return output;
};


var maxSlidingWindow = function(nums, k) {
    const output  = [];
    const deque = []; // indexes
    let l = 0;

    for (let r = 0; r < nums.length; r++) {

        while (deque.length > 0 && nums[r] > nums[deque[deque.length - 1]]) {
            deque.pop();
        }
        deque.push(r);

        if (r - l + 1 >= k) {
            output.push(nums[deque[0]]);
            l++;
            if (deque[0] < l) deque.shift();
        }
    }
    return output;
};

// Intuition:
// Bruteforce: For each window of size k, iterate through each element to find the max within the window. 
// The window will keep shifting towards teh right until he r pointer is out of bound. 

// The problem is that there is too much repetition with the bruteforce. The time complexity might be O(N*k^2) 
// because it iterates over the same elements . 
// But notice that we only care about the max value within the window, other values towards the left side of the max value
// will never be the max because the window keeps shifting towards the right. Soon, these values will be left out as the window
// moves away. 

// However, we care about the smaller values at the right side of the max value because the max value will soon be left behind as well. 
// The values smaller or equal to the max will potentially be the new max. 

// We need a data structure can hold the max value and the values at are located at the right side of max that are smaller than or equal the max value. 

// The deque hold indexes
// the smallest(oldest) index with the maximum value will be located at the left side of the deque
// The largest(newest) index with the minimum value will be located at the right side of the deque


// We need to pop all right values of the deque that are smaller than the new r value
// We need to make sure that the left most index in the deque is within the window. Left most deque element is the smallest (oldest) index
// If our window is of size k, add the value of the left most index in the deque


