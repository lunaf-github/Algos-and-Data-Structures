/*
973. K Closest Points to Origin

Vague Interview Question: 
Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane 
and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance 
(i.e., √(x1 - x2)^2 + (y1 - y2)^2).

Questions to Interviewr:
1. Does the order of the result matter?
2. What is the smallest k value?
3. Is it possible that k > points given?
4. What type of input will the list of arrays be given as? An array?
5. Is the answer garanteed to be unique?

Test Cases:
Input: [[1,1],[2,2]]  k = 0
Output: []

Input: [[1,1],[2,2]]  k = 1
Output: [[1,1]]

Input: [[1,1],[2,2]]  k = 2
Output: [[1,1],[2,2]]

Input: [[1,-1],[-2,-2]]  k = 1
Output: [[1,-1]]

Input: [[1,-1],[-2,-2],[3,3]]  k = 2
Output: [[1,-1],[-2,-2]]


High Level Strategy:
data structures:
   Priority Queue (points) : restrict length of K: comparator: calculate distance and compare with other points

1. iterate through points array, populating  maxheap while restricting length to k
2. while k > 0
     add root value of maxheap to res[k - 1]; decrement k
3. return result array

*/

/*
JS does not have a Priority Queue implementation: Say we are using a third party library:

1. Initialize PriorityQueue:  By default, the priorityQueue is a minHeap
    new ProrityQueue(comparator) 
       maxHeap = new PriorityQueue((a,b) => b - a);
2. Add to PriorityQueue:
    priorityQueue.add()
3. remove root and return value:
    priorityQueue.poll()
4. Get size of priorityQueue:
    priorityQueue.size
*/


/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const maxHeap = new PriorityQueue((a,b) => (b[0]*b[0] + b[1]*b[1]) - (a[0]*a[0] + a[1]*a[1]));

    for( const point of points){
      maxHeap.add(point);
      if(maxHeap.size > k) maxHeap.poll();
    }

    const res = [];

    while(maxHeap.size > 0){
     res.push(maxHeap.poll());
    }

    return res;
};