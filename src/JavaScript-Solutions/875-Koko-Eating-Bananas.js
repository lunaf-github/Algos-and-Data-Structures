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
 //function to calculate the time to eat banana at k pace
 function calculateTime(k){
     let t = 0;        
     for(const pile of piles){
         t += Math.ceil(pile/k);
     }
     return t;
 }
 
 
 // calculate largest banan pile, O(n)
 let l = 1
 let r = Math.max(...piles);
 
 let speed = r;
 // binary search ( k = 1 to Largest Pile size) O(logn)
 while(l <= r){
     const mid = l +  Math.floor((r - l)/2);
     //calculate time to eat bananas O(n)
     const t = calculateTime(mid);

     if(t <= h){

         speed = Math.min(speed, mid)
         r = mid - 1;
     }else{
         l = mid + 1
     }  
 }
 
 return speed;
};  

