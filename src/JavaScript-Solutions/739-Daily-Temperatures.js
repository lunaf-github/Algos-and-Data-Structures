/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

/*
  The stack stores the days(days are represented as indices) that haven't seen a warmer future day.
  This automatically orders the stack in decreasing order 

  If the current day is warmer than the top of the stack, that means that
  the top of stack has finally found a warmer day and we can caculate the days
  it took to see the warmer day. We keep popping from the stack until we find a 
  day (within the stack) that is warmer than the current day. 
*/

var dailyTemperatures = function(temperatures) {
  const stack = [];
  const res = Array.from({ length: temperatures.length }, () => 0);

  temperatures.forEach((temp, index) => {
      while (stack.length > 0 && temp > temperatures[stack[stack.length - 1]]) {
          const prevIndex = stack.pop();
          res[prevIndex] = index - prevIndex;
      }
      stack.push(index);
  });

  return res;
};

