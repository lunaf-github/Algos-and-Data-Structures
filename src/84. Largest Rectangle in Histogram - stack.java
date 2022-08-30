class Main {
    public int largestRectangleArea(int[] heights) {
        Stack<Integer> stack = new Stack<>();
        int maxArea = 0;
        int area = 0;
        int i;

        for(i = 0; i < heights.length;){
            if(stack.isEmpty() || heights[stack.peek()] <= heights[i]){
                stack.push(i++);
            }else{
                int stackTop = stack.pop();
                if(stack.isEmpty()){
                    area = heights[stackTop]*i;
                }else{
                    area = heights[stackTop]* (i - stack.peek() - 1);
                }
                maxArea = Math.max(maxArea , area);
            }
        }

        while(!stack.isEmpty()){
            int stackTop = stack.pop();
            if(stack.isEmpty()){
                area = heights[stackTop]*i;
            }else{
                area = heights[stackTop]* (i - stack.peek() - 1);
            }
            maxArea = Math.max(maxArea , area);
        }
        return maxArea;
    }

    public int check((){
        int[] sample = new int[1,2,3,4,1,2,1];
        return largestRectangleArea(sample);
    }
}
// add a comment