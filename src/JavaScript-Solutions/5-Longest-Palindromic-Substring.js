
/**
 * @param {string} s
 * @return {string}
 */


var longestPalindrome1 = function(s) {
 var longest = s[0];
 
 // odd
 var l = 0;
 var r = 2;
 if (s.length >= 3) {  
     while (r < s.length) {
         isPalindrome(l, r);   
         l += 1;
         r += 1;
     }
 }
 // even
 l = 0;
 r = 1;   
 if (s.length >= 2) { 
     while (r < s.length) {
         isPalindrome(l,r);
         l += 1;
         r += 1;
     }
 }
 
 return longest;
     
 // **************
 
 function isPalindrome(l,r) {
     if (l < 0 || r >= s.length) return;
     
     while (l >= 0 && r < s.length) {
         if (s[l] !== s[r]) return;                 
         if (r - l + 1 > longest.length) {
             longest = s.substring(l, r + 1);  
         } 
         l-=1;
         r+=1;
     }
 }
}

// Memoization backtracking solution, not efficient enough

var longestPalindrome = function(s) {
 const memoize = {};
 let longestPalindrome = '';
 
 if (isPalindrome(0, s.length - 1)) return s;
 
 dfs(0,0);

 return longestPalindrome;
 
 // ***********************************
 
 function dfs(l, r) {
     const curInterval = `${l},${r}`;
     
     if (memoize[curInterval]) {
         return memoize[curInterval];
     }
     
     if(l > r || r === s.length) return 0;      

     const leftLength = dfs(l + 1, r);
     const rightLength = dfs(l, r + 1);
     
     let curLength = r - l + 1;
     
     if (curLength > longestPalindrome.length && isPalindrome(l, r)) {
         longestPalindrome = s.substring(l, r + 1);  
         memoize[curInterval] = curLength;        
     }
     
     if (!memoize[curInterval]){
         memoize[curInterval] = Math.max(leftLength, rightLength);   
     }

     return memoize[curInterval];
 }
 
 
 function isPalindrome(l, r){
     while (l < r) {
         if (s[l] !== s[r]) {
             return false;
         }
         l += 1;
         r -= 1;
     }
     return true;
 }
 
};

// babad
//  l
//   r

//  1. move l pointer
//  2. move r pointer

//  tracker = longestPalin =  0

// Rules:

// 1.  if isPalindrom(l,r) = true update tracker 
// 2.  l < r always
// 3.  memoization, key: substring, value: longest Palindrom
// 4.  recursion, post order. look left, then look right, check current substring if palindomr
// 5.     compare left, right, and curSubstring. The result is memoized. 

         
// before memoization           

//                         0,0
//                           \
//                     ______0,1_________
//                    /                  \
//                  1,1               __________0,2____________
//                   \               /                         \ 
//                   1,2       ____1,2______                _ 0,3___ 
//                   / \      /             \              /        \
//                2,2  1,3   2,2            _1,3___       1,3        0,4
//                 \     \    \            /       \      /  \        /
//                2,3    1,4  2,3       _2,3      1,4  2,3  1,4    1,4
//               /  \    /    / \      /    \      /    /    /      /
//             3,3  2,4 2,4 3,3 2,4   3,3   2,4   2,4 3,3  2,4    2,4
//              \    /  /    \    /    \     /    /     \    /     /
//             3,4 3,4 3,4  3,4 3,4  3,4  3,4   3,4    3,4  3,4   3,4
//             /    /  /     /   /     /    /    /      /    /     /
//           4,4  4,4 4,4  4,4  4,4   4,4  4,4  4,4   4,4   4,4   4,4

// After memoization

//                      0,0
//                        \
//                     __0,1__   
//                    /       \
//                  1,1       0,2
//                   \          \ 
//                   1,2        0,3 
//                   / \          \
//                2,2  1,3        0,4
//                 \     \              
//                2,3    1,4   
//               /  \                          
//             3,3  2,4                      
//              \            
//             3,4          
//             /            
//           4,4           
 


              
              




