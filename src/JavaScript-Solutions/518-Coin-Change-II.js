/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */

var change = function(amount, coins) {
   var curRow = Array.from(Array(amount + 1), x => 0);
   curRow[0] = 1;

   for(const coin of coins){     
       let prevRow = [...curRow];

       for(let curTarget = 1; curTarget <= amount; curTarget++){
           let numWays = 0;
           if(curTarget - coin >= 0) numWays = curRow[curTarget - coin];
           curRow[curTarget] = prevRow[curTarget] + numWays;
       }
   }
   
   return curRow[amount];
};