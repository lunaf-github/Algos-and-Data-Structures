/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
/**


/**
  We are a given a number, which is made up of 32 bits
  For example, n = 00000010100101000001111010011100

  We need to reverse all bits
  To achieve this we have to do the following steps. 
  
  1. Determine the value of the bit located at the ith position (we start with the rightmost bit, position 0,  and move our way to the leftmost, position 31)
        A. We can use the & operator 
            ex. 0101 & 1001 = 0001  
            The & operator will return 1 for each bit if they are both 1s. We can save the result in a variable called bit. 
        B. One problem is that 1 is always represented as 0001, so to find the other bits we need to shift our input (n) number by i
            ex. 0101 , we want to find out what value is the 3rd bit from the right (located in index 2)
            So, we shift our number by 2, from 0101 to 0010 to 0001, then we perfrom the & operation mentions in step A. 
  2. After figuring out the value of the bit at the ith position, we need to transfer that bit to our res variable in the reverse order. 
        A. We can use the | operator to acheive this. 
            ex. 0000 | 1000 = 1000, the Or (|) operator will return one if at least one of the bits we are comparing is a 1. 
        B. If the current ith bit is 1, lets say for example the rightmost which is at the 0th position. We need to figure out how to reverse 
           the bit and transfer it to res. To do this we can shift by 31 - i, in this case it will be 31 - 0, so we shift by 31 (
           our 1 is currently at the 32th position)
           ex. 00000000000000000000000000000001 << 31 which equals to  10000000000000000000000000000000 
           Afte the shift, we can perform the | operations with res. 
           ex. res = 00000000000000000000000000000000     bit  = 10000000000000000000000000000000
               res | bit = 10000000000000000000000000000000
               update res with result. 
               res = res | bit
 3. After reversion all bits, make sure we return positive value. So we use the >>> to shift by 0, this removes the negative sign. 
 
According to MDN docs for the (>>>) operator:

"Excess bits shifted off to the right are discarded, and zero bits are shifted 
in from the left. The sign bit becomes 0, so the result is always non-negative.""

In line 55, if we perform an unsigned right shift(>>>) of zero, it will not shift
the bits because are shifting the bits by 0. But, it will return a non-negative, which
is what we want. 
            
*/

var reverseBits = function(n) {
 var res = 0;
 
 for(let i = 0; i < 32; i++){
     let bit = (n >> i) & 1;
     res = res | (bit << 31 - i)
 }
       
 return res >>> 0
 
};


/**

*/


