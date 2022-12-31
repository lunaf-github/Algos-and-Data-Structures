/** 
1046. Last Stone Weight

You are given an array of integers stones where stones[i] is the weight of the ith stone.

We are playing a game with the stones. On each turn, we choose the heaviest two stones and 
smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The 
result of this smash is:

If x == y, both stones are destroyed, and
If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
At the end of the game, there is at most one stone left.

Return the weight of the last remaining stone. If there are no stones left, return 0.

Example 1:
  Input: stones = [2,7,4,1,8,1]
  Output: 1
  Explanation: 
  We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
  we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
  we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
  we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.
Example 2:
  Input: stones = [1]
  Output: 1

Constraints:
1 <= stones.length <= 30
1 <= stones[i] <= 1000
*/

/** 
 * Questions for interviewr:
 * 
 * Problem: 
 * You are given an array of integers stones where stones[i] is the weight of the ith stone.
 * We are playing a game with the stones. On each turn, we choose the heaviest two stones and 
 * smash them together. Suppose the heaviest two stones have weights x and y with x <= y. 
 * The result of this smash is:
 *   If x == y, both stones are destroyed, and
 *   If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
 * At the end of the game, there is at most one stone left.
 * Return the weight of the last remaining stone.
 * 
 * Questions: 
 * 1. What do we return if we end up with no stones left?
 * 2. Are the stone weights in sorted order?
 * 3. What are the smallest and largest amount of stones that will be given?
 */

/**
 * Used 3rd party library: 
 * https://github.com/datastructures-js/priority-queue
 * minHeap = minPriorityQueue()
 * maxHeap = maxPriorityQueue()
 * .enqueue() = add element (TC: logn)
 * .dequeue() = remove root (TC: logn)
 * .front() = get root element without removing root (TC: O(1))
 * .enqueue() and .front() return a node(object) which contains the priority number and value
 *      use .element to get the value. 
 */

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
 const maxHeap = new MaxPriorityQueue()
 for(const stone of stones){
     maxHeap.enqueue(stone);
 }

 while(maxHeap.size() > 1){
     const y = maxHeap.dequeue().element;
     const x = maxHeap.dequeue().element;

     if(y - x > 0) maxHeap.enqueue(y - x);
     
 }
 
 if(maxHeap.size() ===  0) return 0;
 else return maxHeap.front().element;
};

