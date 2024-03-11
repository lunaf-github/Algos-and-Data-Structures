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

    tokens.forEach(token => {
        switch (token) {
            case '+':
                stack.push(stack.pop() + stack.pop());
                break;
            case '-':
                stack.push(-stack.pop() + stack.pop());
                break;
            case '*':
                stack.push(stack.pop() * stack.pop());
                break;
            case '/':
                const divisor = stack.pop();
                const dividend = stack.pop();

                // truncate the value toward zero
                stack.push((dividend / divisor) | 0);
                break;
            default:
                stack.push(Number(token));
        }
    });

    return stack[0];
};

/*
    Inside a switch case block, each case does not contain it's own block scope. 
    So, declaring a variable inside a case declares the variable for the whole switch block

    Also, for operation where order matters such as subtraction and division, make sure that
    the first second popped value is the the left operand and the second is the right operand. 
 */