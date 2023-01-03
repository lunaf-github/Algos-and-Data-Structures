/**
 * Vague intervew question:
 * Given an array of intervals where intervals[i] = [starti, endi], merge 
 * all overlapping intervals
 * 
 * Questions: 
 * 1. Return a new array with the merged intervals?
 * 2. What is the smallest intervals array length that will be given?
 * 3. Are their negative interval start and end values?
 * 4. Are the intervals in sorted order? If yes, accending or decending? 
 * 5. If starts of the next interval is equal to the end of the previous interval, 
 *    is that considered overlapping? 
 * 
 * Test Case:
 * 1. [[1,2]] - only one interval
 * 2. [[1,2][3,4][5,6]] - non are overlapping
 * 3. [[1,4][2,8][7,9]] - all overlapping
 * 4. [[1,2][4,6][5,7][9,10]] - only middle intervals overlapping
 * 7. [[1,5][2,3][7,9],[10,12][11,13]] - beginning and end intervals in array overlapping
 */

/**
56. Merge Intervals

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:
  Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
  Output: [[1,6],[8,10],[15,18]]
  Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:
  Input: intervals = [[1,4],[4,5]]
  Output: [[1,5]]
  Explanation: Intervals [1,4] and [4,5] are considered overlapping.

Constraints:
  1 <= intervals.length <= 104
  intervals[i].length == 2
  0 <= starti <= endi <= 104
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function(intervals) {

 intervals.sort((a,b) => a[0] - b[0]);
 const output = [];
 
 let prevInterval = intervals[0];
 output.push(prevInterval);
 
 for(const interval of intervals){
     if(prevInterval[1] >= interval[0]){
         prevInterval[1] = Math.max(prevInterval[1], interval[1]);
     }else{
         prevInterval = interval;
         output.push(prevInterval);
     }
 }
 return output;
};
