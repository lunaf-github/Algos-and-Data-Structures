/**
 * Vague Interview Question:
 * Given a string s consisting of words and spaces, return the length of the 
 * last word in the string.
 * 
 * Questions for interviewer:
 * 1. Are there leading and trailing spaces?
 * 2. What is the smallest amount of words that we will be given in a string?
 * 3. Is it okay for you if I utilize the split method?
 * 4. Are there more than one white spaces between each word?
 * 5. Are symbols included?
 */

/*
58. Length of Last Word

Given a string s consisting of words and spaces, return the length of the last 
word in the string.

A word is a maximal substring consisting of non-space characters only.

Example 1:
  Input: s = "Hello World"
  Output: 5
  Explanation: The last word is "World" with length 5.
Example 2:
  Input: s = "   fly me   to   the moon  "
  Output: 4
  Explanation: The last word is "moon" with length 4.
Example 3:
  Input: s = "luffy is still joyboy"
  Output: 6
  Explanation: The last word is "joyboy" with length 6.

Constraints:
  1 <= s.length <= 104
  s consists of only English letters and spaces ' '.
  There will be at least one word in s.
*/

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function(s) {

 let r = s.length - 1;
 while(s[r] === ' ') r--;

 let l = r;
 while(l >= 0 && s[l] !== ' ') l--;

 return r - l
};
