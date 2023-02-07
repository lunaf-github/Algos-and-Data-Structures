/**
 * Vague interview question:
 * Given an array of strings strs, group the anagrams together. 
 * 
 * Questions:
 * 1. Group them together as a seperate array of strings?
 * 2. Does order of each string matter?
 * 3. What is the shortest possible array size?
 * 4. Does the strings consist of only lowercase letters?
 * 
 * Test Cases:
 * 1. [anagram, naragram, tap, pat]
 * 2. [""]
 * 3. [a]
 */


/**
 * 49. Group Anagrams
Given an array of strings strs, group the anagrams together. You 
can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters 
of a different word or phrase, typically using all the original 
letters exactly once.

Example 1:
  Input: strs = ["eat","tea","tan","ate","nat","bat"]
  Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:
  Input: strs = [""]
  Output: [[""]]
Example 3:
  Input: strs = ["a"]
  Output: [["a"]]

Constraints:
  1 <= strs.length <= 104
  0 <= strs[i].length <= 100
  strs[i] consists of lowercase English letters.
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
 //declare result array
 const res = [];
 //hashmap <string, string[]>
 const map = new Map();
 //iterate through every string
 for(let s of strs){
     // declare a new codeArray and prefill with 0s
     const codeArray = new Array(26);
     codeArray.fill(0);
     // loop to fill up codeArray
     for(let i = 0; i < s.length; i++){
         codeArray[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
     }
     // codekey = string of codearray
     const codeKey = codeArray.toString();
     // if codekey is not in map, then add codekey  with empty array as value
     if(!map.has(codeKey)) map.set(codeKey, []);
     // add word to map using code key
     map.get(codeKey).push(s);
 }
 // iterate througth map, and push values to res array
 for(let array of map.values()){
     res.push(array);
 }
 return res;
};


var groupAnagrams = function(strs) {

  const res = [];
  const anagramGroups = new Map();
  
  for(const str of strs){
      const keyArray = Array.from(Array(26), x => 0);
      
      for(let i = 0; i < str.length; i++){
          const charCode = str.charCodeAt(i) -  'a'.charCodeAt(0)
          keyArray[charCode]++;
      }
             
      const key = keyArray.join(',');
      if(!anagramGroups.has(key)) anagramGroups.set(key, []);
      
      anagramGroups.get(key).push(str);
  }

  anagramGroups.forEach((value) => res.push(value));
  
  return res;
  
};
