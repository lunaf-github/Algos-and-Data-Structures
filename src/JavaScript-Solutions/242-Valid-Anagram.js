/** 
242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word 
or phrase, typically using all the original letters exactly once.

Example 1:
  Input: s = "anagram", t = "nagaram"
  Output: true
Example 2:
  Input: s = "rat", t = "car"
  Output: false
 
Constraints:
  1 <= s.length, t.length <= 5 * 104
  s and t consist of lowercase English letters.
*/


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
 const charMap = Array(26);
 charMap.fill(0);
 const a = 'a'.charCodeAt(0);
 
 for(let i = 0; i < s.length; i++){
     const charCode = s.charCodeAt(i);
     charMap[charCode - a]++ 
 }
 
 for(let i = 0; i < t.length; i++){
     const charCode = t.charCodeAt(i);
     charMap[charCode - a]-- 
     if(charMap[charCode - a] < 0) return false;
 }

 for(let i = 0; i < charMap.length; i++){
     if(charMap[i] !== 0) return false;
 }
 
 return true;
};

// test cases: 
// s="anagram" t=""
// s="anagram" t="naragram"
// s=""        t="naragram"
// s="aaaaaaa" t="aaa"
// a=""        t=""

/** clarifying questions:
 * 1. Are we working with only lowercase letters?
 * 2. How long is each word?
 * 3. What is the smallest string length?
 * */ 
