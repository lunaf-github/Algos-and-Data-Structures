/**
 * @param {number} n
 * @return {string[]}
 */

// only add open parethesis if open < n;
// only add a closing parenthesis if closed < open
// valid IIF open == closed == n

var generateParenthesis = function(n) {
    const stack = [];
    const res = [];
    
    backtrack(0,0);
    return res;

    // ************************************
    
    function backtrack(open, close) {
        // base case, complete valid parethesis string
        if (open === n && close === n) {
            res.push(stack.join(''));
            return;
        }

        // add open parethesis as long as qty is less than n
        if (open < n) {
            stack.push('(');
            backtrack(open + 1, close);
            stack.pop();
        }

        // never add closed parenthesis if close is equal to open 
        if (close < open) {
            stack.push(')');
            backtrack(open, close + 1);
            stack.pop();
        }
    }

};