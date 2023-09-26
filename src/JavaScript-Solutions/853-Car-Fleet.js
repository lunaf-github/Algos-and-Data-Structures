/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */

// TC: O(nlogn)
// SC: O(n)

var carFleet = function(target, position, speed) {
    // cars array, each element is an object with startPosition and arrivalTime props: TC O(n)
    const cars = position.map((startPosition, i) => {
         const arrivalTime = (target - startPosition) / speed[i];
         return {arrivalTime, startPosition};
    });

    // Sort cars arrays based on startPosition: TC O(nlogn)
    cars.sort((a,b) => a.startPosition - b.startPosition);

    // monotonic decreasing stack based on arrivalTime: TC O(n)
    const fleetStack = [];
    // pop from stack if current arrivalTime >= top of stack arrivalTme
    for (let i = 0; i < cars.length; i++) {
        while (!isEmpty(fleetStack) && cars[i].arrivalTime >= stackPeek(fleetStack).arrivalTime) {
            fleetStack.pop();
        }
        fleetStack.push(cars[i]);
    }
    // return size of stack: TC O(1)
    return fleetStack.length;

    // ***************************

    function stackPeek(stack) {
        return stack[stack.length - 1];
    }

    function isEmpty(stack) {
        return stack.length === 0;
    }
}

/**
 * Intuition:
 * 
 * Whenever position and time is mentioned, graph the problem to discover the pattern. 
 * 
 * In this problem, all cars are moving at a certain speed starting at a specified point. 
 * We can calculate the arrival time for each car by using ArrivalTime = (distance/ speed)
 * This formula was derived from speed = distance / time. 
 * The distance is the difference between the target position and starting position. 
 * distance = targetPosition - startPostion. 
 * 
 * Now that we can calculate that arrival time for each car, we can use this information to 
 * determine if a car will catch up with another car. 
 * 
 * If a car's arrival time is less than the arrival time of a car in front of it, that means 
 * that it will catch up.
 * 
 * We create an array where each element contains the start position and arrival time. We 
 * need the start position so that we can sort this array. 
 * 
 * We can use a monotonic decreasing stack based on arrival time to determine the number of fleets. 
*/