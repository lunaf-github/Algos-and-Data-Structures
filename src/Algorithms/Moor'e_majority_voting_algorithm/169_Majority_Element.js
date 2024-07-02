/**
 * @param {number[]} nums
 * @return {number}
 */


var majorityElement = function(nums) {
    let majorityEl = -1;
    let votes = 0;

    nums.forEach(num => {
        if (votes <= 0) {
            majorityEl = num;
        }

        if (num === majorityEl) {
            votes += 1;
        } else {
            votes -= 1;
        }
    });

    votes = 0;
    nums.forEach(num => {
        if (num === majorityEl) {
            votes += 1;
        }
    });

    if (votes >= Math.floor(nums.length / 2)) return majorityEl;
    return -1;
};