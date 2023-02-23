/**
 * @param {number} n
 * @return {boolean}
 */
/** 
SC = O(n)
var isHappy = function(n) {
 var visited = new Set();
 
 while(n != 1){
     if(visited.has(n)) return false;
     visited.add(n);
     
     let strNum = String(n);
     let sqrSum = 0;
     for(let i = 0; i < strNum.length; i++){
         let digit = Number(strNum[i])
         sqrSum += (digit * digit);
     }
     
     n = sqrSum;
 }
 
 return true;
};
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  var slow = n;
  var fast = dgtSqrSum(n);

  while(fast != 1){
    if(fast == slow) return false;
    slow = dgtSqrSum(slow);
    fast = dgtSqrSum(dgtSqrSum(fast))
  }
     
  return true;
     
 //*****************
  function dgtSqrSum(num){
    let strNum = String(num);
    let sqrSum = 0;
    for(const strNumDgt of strNum){
      let numDgt = Number(strNumDgt)
      sqrSum += (numDgt * numDgt);
    }
    return sqrSum;
 }
 
};
