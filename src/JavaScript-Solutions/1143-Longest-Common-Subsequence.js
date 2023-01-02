/**
 * Vague interview Question:
 * Problem:
 * Given two strings text1 and text2, return the length of their longest common subsequence. 
 * 
 * Questions:
 * 1. Subsequence means that the letters are not contigious, but in the same order?
 * 2. What if we can't find a common subsequence, what should the function return?
 * 3. Is it garantied that we will be given both texts? Or can one be an empty string?
 * 4. Are both texts make of only lowercase letters?
 * 
 * Test Cases:
 * 1. text1 = "abcde", text2 = "ace" 
 * 2. text1 = "a", text2 = "ace"
 * 3. text1 = "abcdeacded", text2 = "aced" 
 * 4. text1 = "cfegd", text2 = "aced"
 */

// bug issues:
// 1. All rows had the same referrence, a change in a column changed all columns
// 2. Mixed up the rows and columns

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
 const dp = [];
 
 for(let r = 0; r < text2.length + 1; r++){
     const dpRow = new Array(text1.length + 1);
     dpRow.fill(0);
     dp.push(dpRow)
 }
 
//     Alternate way of creating the 0 filled matrix:     
//     const dp = Array.from(Array(text2.length + 1), row => Array(text1.length + 1).fill(0));

 for(let r = text2.length - 1; r >= 0; r--){
     for(let c = text1.length - 1; c >= 0; c--){
         if(text2[r] === text1[c]){
             dp[r][c] = 1 + dp[r + 1][c + 1];
         }else{
             dp[r][c] = Math.max(dp[r + 1][c], dp[r][c + 1]);
         }
     }
 }

 return dp[0][0];
};

                     
//     a b c b c b a       text1
//   a 5 4 4 4 3 2 1 0
//   b 4 4 4 4 3 2 1 0 
//   c 3 3 3 3 3 2 1 0
//   b 2 2 2 2 2 2 1 0 
//   a 2 1 1 1 1 1 1 0  
//     0 0 0 0 0 0 0 0 

// text2