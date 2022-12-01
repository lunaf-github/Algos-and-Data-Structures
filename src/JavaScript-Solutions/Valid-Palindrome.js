const isPalindrome = (s) => {

 s = s.toLowerCase();

 // in regex, characters inside the [] are characters that we want to match with
 // if we add a ^ in the beginning inside the [], it converts it to letters we don't want 
 // to match with. So, in the case below, we want to match any letter except a-z and 0-9. 
 
 s = s.replace(/[^a-z0-9]/g,'');

 let l = 0;
 let r = s.length - 1;

 while(l < r){
  if(s[l] !== s[r]) return false;
  l++;
  r--;
 }
 return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));