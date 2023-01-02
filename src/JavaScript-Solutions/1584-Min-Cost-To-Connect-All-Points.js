/**
 * Problem: 
 * You are given an array points representing integer coordinates of some points on a 2D-plane, 
 * where points[i] = [xi, yi].The cost of connecting two points [xi, yi] and [xj, yj] is the 
 * manhattan distance between them: |xi - xj| + |yi - yj|, where |val| denotes the absolute 
 * value of val.
 * 
 * Return the minimum cost to make all points connected. 
 * 
 * Questions to interviewer: 
 * 1. Are all points connected by a single connection? 
 * 2. Does it have to form a cycle or straight path? Can fork into different paths as long
 *    as they are connected?
 * 3. What is the smallest amount of points that will be given?
 * 4. Does thi coordinate system contain negative coordinates?
 * 5. Are all points distinct?
 */

/**
1584. Min Cost to Connect All Points

You are given an array points representing integer coordinates of some points on a 2D-plane,
where points[i] = [xi, yi].

The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between 
them: |xi - xj| + |yi - yj|, where |val| denotes the absolute value of val.

Return the minimum cost to make all points connected. All points are connected if there is 
exactly one simple path between any two points.

Example 1:
  Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
  Output: 20
  Explanation: 
  We can connect the points as shown above to get the minimum cost of 20.
  Notice that there is a unique path between every pair of points.
Example 2:
  Input: points = [[3,12],[-2,5],[-4,1]]
  Output: 18

Constraints:
  1 <= points.length <= 1000
  -106 <= xi, yi <= 106
  All pairs (xi, yi) are distinct.
*/

/**
 * Test Cases
 * 1. points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
 * 2. points = [[0,0],[-2,-2],[3,10],[-5,-2],[7,0]]
 * 3. points = [[0,0]]
 */

/**
 * @param {number[][]} points
 * @return {number}
 */


// use prim's algorithm
var minCostConnectPoints = function(points) {
 function distance(a, b){
     return Math.abs(points[b][0] - points[a][0]) + Math.abs(points[b][1] - points[a][1]);
 }
 
 const n = points.length;
 
 const visited = new Set();
 visited.add(0);
 
 const dist = [];
 let totalWeight = 0;
 
 for(let i = 0; i < n; i++){
     dist[i] = distance(0, i)
 }
 
 while(visited.size !== n){
     let next;
     
     for(let i = 0; i < n; i++){
         if(visited.has(i)) continue;
         if(!next || dist[next] > dist[i]) next = i;
     }
     
     totalWeight += dist[next];
     visited.add(next);
     
     for(let i = 0; i < n; i++){
         if(visited.has(i)) continue;
         dist[i] = Math.min(dist[i], distance(next, i));
     }
 }
 return totalWeight;
};
