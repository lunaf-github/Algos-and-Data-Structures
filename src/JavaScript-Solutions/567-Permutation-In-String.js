/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var checkInclusion1 = function(s1, s2) {
 if(s1.length > s2.length) return false;

 const charCount = Object.create(null);
 for(const char of s1){
     if(charCount[char] === undefined) charCount[char] = 0;
     charCount[char]++;
 }

 let left = 0;
 for(let right = 0; right < s2.length; right++){
     
     const rightChar = s2[right];
     let leftChar = s2[left];
     

     if(rightChar in charCount){
         charCount[rightChar]--;
     }else{
         while(left <= right){
             leftChar = s2[left];
             if(leftChar in charCount) charCount[leftChar]++
             left++;
         } 
     }
     
     while(charCount[rightChar] < 0){
         leftChar = s2[left]
         charCount[leftChar]++;
         left++;
     }

     const windowSize = right - left + 1;
     if(windowSize === s1.length) return true;

 }
 
 return false;
 
};