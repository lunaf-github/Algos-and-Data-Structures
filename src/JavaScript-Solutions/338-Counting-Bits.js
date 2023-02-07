/**
 * Approach 1: 
 * use & operator to compare 1 with num. If the rightmost bit is one, it will return one else it returns 0. 
 * Add the resulting value to a counter. 
 * then use the unassigned shift operater >>> to remove the right most bit. 
 * Keep repeating until the  number equals to 0. 
 * Push the count of one's to our answer array. 
 * Reapeat for each number until we reach n. 
 */

const countBits = function(n){
  const ans = [0];
    
  function countOnes(num){
    let count = 0;
    while(num > 0){
      count += num & 1;
      num = num >>> 1
    }
    return count;
  }
    
  for(let i = 1; i <= n; i++){
    ans.push(countBits(i));
  }
    
  return ans;
}


/**
 * If we divide by 2, it shifts the bits to the right. Similar to >>> operator. 
 * If we use modulus of 2, it is Similar to % operator  
 * For example: 
 * num = 3 => 0011
 * num = num/2 => num = 3/2 => num = 1 => 0001 
 */

const countBits1 = function(n){
 const ans = [0];
   
 function countOnes(num){
   let count = 0;
   while(num > 0){
     count += num % 2;
     num = Math.floor(num / 2);
   }
   return count;
 }
   
 for(let i = 1; i <= n; i++){
   ans.push(countOnes(i));
 }
   
 return ans;
}


/**
 * But there is a pattern to the bits. 
 * 0 - 0000 - 0
 *                       |----|
 * 1 - 0001 - 1 + dp[n - 1]  2^0  => 2 ^ offset , offset = 0
 *                       |----|
 * 2 - 0010 - 1 + dp[n - 2]  2^1
 * 3 - 0011 - 1 + dp[n - 2] 
 *                       |----| 
 * 4 - 0100 - 1 + dp[n - 4]  2^2
 * 5 - 0101 - 1 + dp[n - 4]  
 * 6 - 0110 - 1 + dp[n - 4]
 * 7 - 0111 - 1 + dp[n - 4] 
 * 8 - 1000 - 1 + dp[n - 8] 
 *                       ^
 *                       lets call this the offset
 *                       if num is equal to 2^offset, then we can increase offset by one
 * 
 *                       We start with offset 1, (we know 0 has 0 bits)
 *                       if we start with offset = 0, 2^0 is equal to 1. We dont start iterating at 0
 *                       because we know that 0 has no bits. So, if we start iterating at num = 1, 
 *                       then 1 will equal 2^0, so we will end up changing our offset to 1 anyways.                       
 * 
 *                       if num is equal to 2^offset, then we can increase offset by one
 */

var countBitsDP = function(n) {

 const dp = [0];
 let offset = 1;
 
 for(let i = 1; i <= n; i++){
     if(offset * 2 == i){
         offset = i;
     }
     
     dp.push(1 + dp[i - offset])
 }
 
 return dp;
};