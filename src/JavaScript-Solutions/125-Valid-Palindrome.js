// Solution without regex

var isPalindrome = function(s) {
    let l = 0;
    let r = s.length - 1;
    const lowerCaseS = s.toLowerCase();

    while (l < r) {
        while (l < s.length && !isAlphaNumeric(lowerCaseS[l])) l++;
        while (r >= 0 && !isAlphaNumeric(lowerCaseS[r])) r--;
        if (lowerCaseS[l++] !== lowerCaseS[r--]) return false;
    }

    return true;

    function isAlphaNumeric(char) {
        code = char.charCodeAt(0);

        if (!(code > 47 && code < 58) &&
            !(code > 64 && code < 91) &&
            !(code > 96 && code < 123)) return false;

        return true;
    }
};


// Regex Solution
 // in regex, characters inside the [] are characters that we want to match with
 // if we add a ^ in the beginning inside the [], it converts it to letters we don't want 
 // to match with. So, in the case below, we want to match any letter except a-z and 0-9.

const isPalindrome = (s) => {

 s = s.toLowerCase(); 
 s = s.replace(/[^a-z0-9]/g,''); 

 let l = 0;
 let r = s.length - 1;

 while(l < r){
  if(s[l++] !== s[r--]) return false;
 }

 return true;
}



// Tests
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));