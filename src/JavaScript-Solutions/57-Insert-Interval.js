/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */



function insert(intervals, newInterval){
  let i = 0;
  const temp = [];

  while(i < intervals.length && intervals[i][1] < newInterval[0]){
    temp.push(intervals[i]);
    i++;
  }

  while(i < intervals.length && newInterval[1] >= intervals[i][0]){
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  temp.push(newInterval);

  while(i < intervals.length){
    temp.push(intervals[i]);
    i++;
  }

  return temp;
}

const intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]];
const newInterval = [4,8]
console.log(insert(intervals, newInterval));