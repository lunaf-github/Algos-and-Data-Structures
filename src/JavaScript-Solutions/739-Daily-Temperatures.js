/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

var dailyTemperatures = function(temperatures) {
  const availableDays = temperatures.length;
  const stack = [];
  const res = Array.from(Array(availableDays), fillZeros);
  stack.push([temperatures[0], 0]);

  for (let i = 1; i < availableDays; i+=1) {
    while (stack.length > 0 && temperatures[i] > stack[stack.length - 1][0]) {
      const [temp, day] = stack.pop();
      res[day] = i - day;
    }  
     
    stack.push([temperatures[i], i]);
  }
 
  return res;
 
  //***************************
  function fillZeros(x) {
    return 0;
  }
};

