/**
 * @param {number[][]} intervals
 * @return {number}
 */

var eraseOverlapIntervals = function(intervals) {
 const start = 0;
 const end = 1;
 let removeCount = 0;
 
 intervals.sort((a,b) => a[0] - b[0]);

 let prev = 0;
 
 for(let next = 1; next < intervals.length; next++){
     if(intervals[prev][end] > intervals[next][start]){
         removeCount++;
         if(intervals[prev][end] > intervals[next][end]){
             prev = next;
         }
     }else{
         prev = next;
     }
     
 }
 
 return removeCount;
};
