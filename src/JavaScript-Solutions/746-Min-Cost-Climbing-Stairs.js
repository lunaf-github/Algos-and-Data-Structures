/**
 * Vague interview questions:
 * You are given an integer array cost where cost[i] is the cost of ith step on a staircase. 
 * Once you pay the cost, you can either climb one or two steps.You can either start from 
 * the step with index 0, or the step with index 1.
 * 
 * Return the minimum cost to reach the top of the floor.
 * 
 * Questions:
 * 1. What is the maximum amount of steps I can skip in one step?
 * 2. What is the smallest and largest number of steps that the staircase has?
 * 3. If I am able to take more than one step at a time, will it cost more if I take the bigger
 *    step?
 * 4. The top floor is the last element? or is it once we go out of bound (index = cost.length)
 * 
 * Test Cases:
 * 1. [1,5,1,3,6,1,1,4]
 * 2. [1,2]
 */

/**
746. Min Cost Climbing Stairs

You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once 
you pay the cost, you can either climb one or two steps.You can either start from the step with 
index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.

Example 1:
  Input: cost = [10,15,20]
  Output: 15
  Explanation: You will start at index 1.
  - Pay 15 and climb two steps to reach the top.
  The total cost is 15.
Example 2:
  Input: cost = [1,100,1,1,1,100,1,1,100,1]
  Output: 6
  Explanation: You will start at index 0.
  - Pay 1 and climb two steps to reach index 2.
  - Pay 1 and climb two steps to reach index 4.
  - Pay 1 and climb two steps to reach index 6.
  - Pay 1 and climb one step to reach index 7.
  - Pay 1 and climb two steps to reach index 9.
  - Pay 1 and climb one step to reach the top.
  The total cost is 6.

Constraints:
  2 <= cost.length <= 1000
  0 <= cost[i] <= 999
*/

/**
 * @param {number[]} cost
 * @return {number}
 */

var minCostClimbingStairs = function(cost) {
 cost.push(0);
 const n = cost.length;
 
 for(let i = n - 3; i >= 0; i--){
     cost[i] += Math.min(cost[i + 1], cost[i + 2]);
 }
 
 return Math.min(cost[0], cost[1]);
};
 

