class Solution {

    public int evalRPN(String[] tokens) {
        int a;
        int b;
        Stack<Integer> stack = new Stack<>();
        for(String token : tokens){
            if(token.equals("+")){
                stack.add(stack.pop() + stack.pop());
            }else if(token.equals("-")){
                b = stack.pop();
                a = stack.pop();
                stack.add(a - b);
            }else if(token.equals("*")){
                stack.add(stack.pop() * stack.pop());
            }else if(token.equals("/")){
                b = stack.pop();
                a = stack.pop();
                stack.add(a/b);
            }else{

                stack.add(Integer.parseInt(token));
            }
        }
        return stack.pop();
    }
}