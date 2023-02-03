/**
 * @param {string} palindrome
 * @return {string}
 */


var breakPalindrome = function(palindrome) {
 const charArr = palindrome.split('');
 const n = charArr.length;
 
 for(let i = 0; i < Math.floor(n/2); i++){
     if(charArr[i] !== 'a'){
         charArr[i] = 'a';
         return charArr.join('');
     } 
 }
 
 charArr[charArr.length - 1] = 'b';
 
 return (charArr.length <=  1) ? '' : charArr.join('');
};


