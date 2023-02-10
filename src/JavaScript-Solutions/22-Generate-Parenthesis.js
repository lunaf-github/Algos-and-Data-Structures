/**
 * @param {number} n
 * @return {string[]}
 */

// only add open parethesis if open < n;
// only add a closing parenthesis if closed < open
// valid IIF open == closed == n

var generateParenthesis = function(n) {
 n = Number(n);
 if(isNaN(n)) return NaN;
 
 const stack = [];
 const res = [];

 
 function backtrack(openN , closedN){
     if(openN === n && closedN === n){
         res.push(stack.join(''));
         return;
     }
     
     if(openN < n || openN === closedN){
         stack.push('(');
         backtrack(openN + 1, closedN);
         stack.pop();
     }
     
     if(openN === n || closedN < openN){
         stack.push(')');
         backtrack(openN, closedN + 1);
         stack.pop();
     }
 }
 
 backtrack(0,0)
 
 return res;
};