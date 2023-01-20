/**
 * Vague Interview Question:
 * You are given a string s and an integer k. You can choose any character of the 
 * string and change it to any other uppercase English character. You can perform 
 * this operation at most k times.
 * 
 * Return the length of the longest substring containing the same letter you can 
 * get after performing the above operations.
 * 
 * Questions to interviewer:
 * 1. Will there be an empty string input? No, smallest length is 1
 * 2. Is k always less than the length of the input string? 0 <= k <= s.length
 * 3. Is the input string composed of only capital letters? Yes
 * 
 * Test Cases:
 *  s = "ABAB", k = 2  //4
 *  s = "A", k=1       //1
 *  s = "ABBB", k = 1  //4
 *  s = "ABAB", k = 4  //4
 *  s = "AAAABABBBBBBBB" k=1 //6
 * 
 * High level strategy:
 * Two pointers
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var characterReplacement = function(s, k) {
 let l = 0;
 let r = 0;
 let longestSubstring = 0;
 let mostFreqLetter = 0;
 const map = {};
 
 for(let r = 0; r < s.length; r++){
     if(!map[s[r]]) map[s[r]] = 0;
     map[s[r]]++;
     
     if(map[s[r]] > mostFreqLetter) mostFreqLetter = map[s[r]];
     
     
     while(r - l + 1 - mostFreqLetter > k){
         map[s[l]]--;
         l++;
     } 
     
     longestSubstring = Math.max(longestSubstring, r - l + 1);
 }
 
 return longestSubstring;
};