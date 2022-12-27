/**
  Given an input string s, reverse the order of the words.

  A word is defined as a sequence of non-space characters. 
  The words in s will be separated by at least one space.

  Return a string of the words in reverse order concatenated by a single space.

  Note that s may contain leading or trailing spaces or multiple spaces between two words. 
  The returned string should only have a single space separating the words. 
  Do not include any extra spaces.

  Example 1:
    Input: s = "the sky is blue"
    Output: "blue is sky the"
  Example 2:
    Input: s = "  hello world  "
    Output: "world hello"
    Explanation: Your reversed string should not contain leading or trailing spaces.
  Example 3:
    Input: s = "a good   example"
    Output: "example good a"
    Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
   
  Constraints:
    1 <= s.length <= 104
    s contains English letters (upper-case and lower-case), digits, and spaces ' '.
    There is at least one word in s.
 */


/**
* @param {string} s
* @return {string}
*/

const reverseWords = function(s) {
 let n = s.length; 
 // convert to charArray, using split
     const charArray = s.split('');
 
 //create function to reverse , inputs: start , end
     function reverse(l,r){
         while(l < r){
             let tmp = charArray[l];
             charArray[l++] = charArray[r];
             charArray[r--] = tmp;
         }
     }
 //create function to reverse each word
     function reverseAll(){
         let l = 0;
         let r = 0;     
         while(l < n){
             while(l < r || l < n && charArray[l] === ' ') l++;
             while(r < l || r < n && charArray[r] !== ' ') r++;
             reverse(l, r - 1);
         }  
     }
 //create function that removes duplicate leading, trailing, or multiple spaces
     function trimSpaces(){
         let r = 0;
         let l = 0;
         while(r < n){
             while(r < n && charArray[r] === ' ') r++;
             while(r < n && charArray[r] !== ' ') charArray[l++] = charArray[r++];
             while(r < n && charArray[r] === ' ') r++; 
             if(r < n) charArray[l++] = ' '
         }
         return  charArray.slice(0,l).join('');
     }
                     
 // reverse all chars in input, using reverse function
     reverse(0, n - 1);
 // unreverse each char
     reverseAll();
 // trim and return 
     return trimSpaces();    
};