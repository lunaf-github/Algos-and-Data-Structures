/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

var canCompleteCircuit = function(gas, cost) {
  var travelDistance = gas.length; 
  
  // check if we have enough gas to make complete circle
  {
      let totalGas = 0;
      let totalCost = 0;
      
      for(let i = 0; i < travelDistance; i++){
          totalGas += gas[i];
          totalCost += cost[i]
      }
      
      if(totalGas < totalCost) return -1;
  }
  
  // Determine start index
  
  var startPosition = 0;
  var currentGas = 0; 
  
  for(let i = 0; i < travelDistance; i++){
      let diff = gas[i] - cost[i]
      currentGas += diff;
         
      if(currentGas < 0){
          currentGas = 0;
          startPosition = i + 1;
      }
  }
  
  return startPosition;
};


