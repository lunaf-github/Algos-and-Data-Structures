/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 9 itesm, at most we will have 2 elemsnts that has more than n/3


var majorityElement = function(nums) {
    const res = [];

    let vote1 = 0;
    let vote2 = 0;

    let candidate1 = 0;
    let candidate2 = 0;

    nums.forEach(num => {
        if (num === candidate1) {
            vote1 += 1;
        } else if (num === candidate2) {
            vote2 += 1;
        } else if (vote1 <= 0) {
            vote1 = 1;
            candidate1 = num;
        } else if (vote2 <= 0) {
            vote2 = 1;
            candidate2 = num;
        } else {
            vote1 -= 1;
            vote2 -= 1;
        }
    });


    vote1 = 0;
    vote2 = 0;

    nums.forEach(num => {
        if (num === candidate1) {
            vote1 += 1;
        } else if (num === candidate2) {
            vote2 += 1;
        }
    });
    console.log(vote1, vote2)


    if (vote1 > Math.floor(nums.length / 3)) {
        res.push(candidate1);
    }

    if (vote2 > Math.floor(nums.length / 3)) {
        res.push(candidate2);
    }

    return res;
};