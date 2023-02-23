/**
 * @param {number[][]} intervals
 * @return {boolean}
 */

var canAttendMeetings = function(intervals) {

  intervals.sort(ascStrtTime);

  for(let i = 1; i < intervals.length; i++){
    let prevIntvlEnd = intervals[i - 1][1];
    let curIntvlStart = intervals[i][0];
    if(prevIntvlEnd > curIntvlStart) return false;
  }
  return true;

  //**********

  function ascStrtTime(a,b){
    return a[0] - b[0]
  }
};