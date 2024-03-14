import java.util.Stack;

class Solution {
    public int evalRPN(String[] tokens) {
        Stack<Integer> stack = new Stack<>();

        for (String token : tokens) {
            switch (token) {
                case "+":
                    stack.push(stack.pop() + stack.pop());
                    break;
                case "-":
                    stack.push(-stack.pop() + stack.pop());
                    break;
                case "*":
                    stack.push(stack.pop() * stack.pop());
                    break;
                case "/":
                    int divider = stack.pop();
                    int divisor = stack.pop();
                    stack.push(divisor / divider);
                    break;
                default:
                    stack.push(Integer.parseInt(token));
            }
        }

        return stack.peek();
    }
}
