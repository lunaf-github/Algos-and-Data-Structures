/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {

 if (t.length > s.length) return "";
 
 const needMap = new Map();
 const haveMap = new Map();
 const minSubstr = {start: 0, end: -1};
 
 var have = 0;
 var need = 0;
 
 for (const char of t) {
     if (!needMap.has(char)) {
         needMap.set(char, 0);
         haveMap.set(char, 0);
     }
     if (needMap.get(char) === 0) need += 1;
     needMap.set(char, needMap.get(char) + 1)
 }
 
 var left = 0;
 while (left < s.length && !needMap.has(s[left])) left++;

 for (let right = left; right < s.length; right += 1) {
     
     if (haveMap.has(s[right])) {
         haveMap.set(s[right], haveMap.get(s[right]) + 1)
         if (needMap.get(s[right]) === haveMap.get(s[right])) {
             have += 1;  
         } 
     }   

     while (left <= right && (have === need || !haveMap.has(s[left]))) {
         if (have === need) {
             let minSubstrLength = minSubstr.end - minSubstr.start + 1;
             let curSubstrLength = right - left + 1;

             if (minSubstrLength === 0 || curSubstrLength < minSubstrLength) {
                 minSubstr.start = left;
                 minSubstr.end = right;
             }   
         }
         
         if (haveMap.has(s[left])) {
             haveMap.set(s[left], haveMap.get(s[left]) - 1);                   
         }
        
         if (haveMap.get(s[left]) < needMap.get(s[left])) {
             have -= 1;
         }
             
         left += 1;
     }    
 }
 
 return s.substring(minSubstr.start, minSubstr.end + 1);
};



