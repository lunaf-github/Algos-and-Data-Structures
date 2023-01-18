/*
Vague Interview question:
You are given an array of strings tokens that represents an arithmetic 
expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of 
the expression.

Clarification questions:
1. What operations are expected to be used? * / + -
2. Is there a chance that the user will divide by zero? No
3. If the evaluated result of a division is a float, do I round up or down?
   or do I keep it as a float?
4. Is there any possible invalid inputs? for example:  [4, +, -, /, 1] No
5. Will evaluated results stay within the Integer range?
6. Is it possible to be given an empty imput string? 

test cases: 
1. "[1,2,+]"
2. "[2,2,-]"
3. "[3,3,*]"
4. "[4,4,/]"
5. "[4,2,+,2,*]"

High level solution strategy: 
1. create a stack
2. iterate through each string
3. within each iteration, we add digits to the stack, when we see an operator
   we will pop the last two digits from the stack, then peform the operation. 
   Add, the evaluated result to the stack
4. After interations, we return the last item in stack. 
*/

/**
 * @param {string[]} tokens
 * @return {number}
 */

var evalRPN = function(tokens) {
 const stack = [];
 
 for(const token of tokens){
     if(token === '+'){
         let a = stack.pop();
         let b = stack.pop();
         stack.push(a + b);
     }else if(token === '-'){
         let a = stack.pop();
         let b = stack.pop();
         stack.push(b - a);
     }else if(token === '*'){
         let a = stack.pop();
         let b = stack.pop();  
         stack.push(a * b);
     }else if(token === '/'){
         let a = stack.pop();
         let b = stack.pop();   
         if(a >= 0 && b >= 0 || a < 0 && b < 0) stack.push(Math.floor(b / a));
         else stack.push(Math.ceil(b/a));
     }else{
         stack.push(parseInt(token));
     }
 }

 return  stack.pop();
};