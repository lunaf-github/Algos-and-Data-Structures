const isPalindrome = (s) => {

 s = s.toLowerCase();
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