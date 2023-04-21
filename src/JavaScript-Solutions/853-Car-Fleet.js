/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */

var carFleet = function(target, position, speed) {
    
 const cars = position.map(addPositionAndTime);
 cars.sort(ascPosition);
 
 var carFleets = 0;
 var frontCarTargetTime = 0;
 
 for (let i = cars.length - 1; i >= 0; i -= 1) {
     let curCarTargetTime = cars[i][1];
     
     if (curCarTargetTime > frontCarTargetTime) {
         carFleets += 1;
         frontCarTargetTime = curCarTargetTime;
     }
 }
 
 return carFleets;
 
 // ******************
 
 function addPositionAndTime(position, i) {
     const time = (target - position) / speed[i];
     return [position, time];
 }
 
 function ascPosition(a, b) {
     return a[0] - b[0];
 }
};

/**
 * Intuition:
 * 
 * Whenever position, time, and target is mentioned, linearly
 * graph the problem to help discover a pattern. 
 * 
 * In this case, it is discovered that if a car at a position behind another car
 * has a smaller arrival time compared to the car in front of it, the car will 
 * end up catching up to the front car and both cars will become a fleet
 * 
 * If the car behind has a larger arrival time compared to the car at the front, 
 * The behind car will never cath up to the front car. 
*/