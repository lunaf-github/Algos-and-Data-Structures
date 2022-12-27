
/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
Example 1:
 Input: s = "()"
 Output: true
Example 2:
 Input: s = "()[]{}"
 Output: true
Example 3:
 Input: s = "(]"
 Output: false
 
Constraints:
 1 <= s.length <= 104
 s consists of parentheses only '()[]{}'.
*/

const isValid = function(s) {
 const stack = [];
 for(let i = 0; i < s.length; i++){
   if(s[i] === '(') stack.push(')');
   else if(s[i] === '[') stack.push(']');
   else if(s[i] === '{') stack.push('}');
   else
   {
     if(stack.length === 0 | stack.pop() !== s[i]) return false;
   } 
 }

 return stack.length === 0;
}

/*
Observations: 

valid:  () ,  ([])
invalid: ([)] , [ , ]

LIFO: innermost bracket will be the first one to see its closing bracket. Else, it will be invalid. 

Because LIFO, a stack is most suitable

Example: ([])

stack: ) ] 

if(open parentheses) add closing parenthesis to stack

else compare the closed parenthesis with the bracket on top of the stack
if it is equal, we pop that bracket out of the stack
if not, we return false because it is invalid.

*/


