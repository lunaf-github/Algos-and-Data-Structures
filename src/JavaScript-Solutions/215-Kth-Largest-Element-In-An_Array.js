/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function(nums, k) {
  const minHeap = new MinPriorityQueue()

  for (const num of nums) {
    minHeap.enqueue(num);

    const isAtCapacity = k < minHeap.size();
    if (isAtCapacity) minHeap.dequeue();
  }
  
  return minHeap.front().element
};