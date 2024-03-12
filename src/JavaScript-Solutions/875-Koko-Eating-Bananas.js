/** 
875. Koko Eating Bananas

Koko loves to eat bananas. There are n piles of bananas, the ith pile has 
piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she 
chooses some pile of bananas and eats k bananas from that pile. If the 
ile has less than k bananas, she eats all of them instead and will not 
eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas 
before the guards return.

Return the minimum integer k such that she can eat all the bananas within 
h hours.

Example 1:
  Input: piles = [3,6,7,11], h = 8
  Output: 4
Example 2:
  Input: piles = [30,11,23,4,20], h = 5
  Output: 30
Example 3:
  Input: piles = [30,11,23,4,20], h = 6
  Output: 23

Constraints:
  1 <= piles.length <= 104
  piles.length <= h <= 109
  1 <= piles[i] <= 109
*/

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

// O(nlog(max(p)))

var minEatingSpeed = function(piles, h) {
  let minK = 0;
  let maxK = Math.max(...piles);
  let res = maxK;

  while (minK <= maxK) {
      const midK = minK + Math.floor((maxK - minK) / 2);
      const eatingTime = computeEatingTime(midK);

      if (eatingTime <= h) {
          res = Math.min(midK, res)
          maxK = midK - 1;
      } else {
          minK = midK + 1;
      }
  }

  return res;

  // ********* 
  function computeEatingTime(k) {
      let hours = 0;
      piles.forEach(pile => {
          hours += Math.ceil(pile / k);
      });
      return hours;
  }
};


/*
  If interviewer wants me to manually compute max of piles

  let maxK = piles.reduce((acc, cur) => {
      return Math.max(cur, acc);
  });


*/

