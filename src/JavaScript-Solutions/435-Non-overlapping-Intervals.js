/**
 * @param {number[][]} intervals
 * @return {number}
 */

// Greedy, get the smallest ending of two overlapping intervals
// Smallest ending has better chance of overlapping with more intervals

var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let output = 0;
    let prevEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        const [curStart, curEnd] = intervals[i];
        if (curStart < prevEnd) {
            output++;
            prevEnd = Math.min(curEnd, prevEnd);
        } else {
            prevEnd = curEnd;
        }
    }

    return output;
};
