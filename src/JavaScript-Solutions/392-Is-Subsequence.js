/**
 * Vague Interview Question:
 * Given two strings s and t, return true if s is a subsequence 
 * of t, or false otherwise.
 * 
 * Questions:
 * 1. Are strings composed of only lowercase letters?
 * 2. What is the shortest string that will be given for both s and t?
 */

/**
392. Is Subsequence

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by 
deleting some (can be none) of the characters without disturbing the relative positions 
of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
  Input: s = "abc", t = "ahbgdc"
  Output: true
Example 2:
  Input: s = "axc", t = "ahbgdc"
  Output: false

Constraints:
  0 <= s.length <= 100
  0 <= t.length <= 104
  s and t consist only of lowercase English letters.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


var isSubsequence = function(s, t) {
    
 let j = 0;
 
 for(let i = 0; i < t.length; i++){
     if(s[j] === t[i]){
         j++;
     }   
 }
 
 return j == s.length;
 
};