/**
 * @param {number[][]} intervals
 * @return {number}
 */

var minMeetingRooms = function(intervals) {
 const starts = [];
 const ends = [];

 for (const interval of intervals) {
     const [start, end] = interval;
     starts.push(start);
     ends.push(end);
 }

 starts.sort((a,b) => a - b);
 ends.sort((a,b) => a - b);

 var e = 0;
 var s = 0;
 var curRooms = 0;
 var maxRooms = 0;

 while (s < starts.length) {
     if (starts[s] < ends[e]) {
         curRooms += 1;
         s += 1;
     } else {
         curRooms -= 1;
         e += 1;
     }
     maxRooms = Math.max(maxRooms, curRooms);
 }

 return maxRooms;
};