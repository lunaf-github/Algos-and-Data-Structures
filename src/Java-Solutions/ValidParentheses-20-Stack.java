/*
TC: O(n)
SC: O(1)
inner most parentheses will match with a closing parenthesis first.
So, this means that we have LIFO and a stack is suitable for this problem.

({)} - is not valud input because the parenthesis does not follow the parenthesis rules.

 */

class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack();
        for(char c: s.toCharArray()){
            if(c == '(') {
                stack.push(')');
            }else if(c == '{'){
                stack.push('}');
            }else if(c == '['){
                stack.push(']');
            }else if(stack.isEmpty() || stack.pop() != c){
                return false;
            }
        }
        return stack.isEmpty();
    }
}