class MyStack {
    Queue<Integer> output;
    /** Initialize your data structure here. */
    public MyStack() {
        output = new LinkedList<>();
    }

    /** Push element x onto stack. */
    public void push(int x) {
        int size = output.size();
        output.offer(x);
        for(int i = 0; i < size; i++){
            output.offer(output.poll());
        }
    }

    /** Removes the element on top of the stack and returns that element. */
    public int pop() {
        return output.poll();
    }

    /** Get the top element. */
    public int top() {
        return output.peek();
    }

    /** Returns whether the stack is empty. */
    public boolean empty() {
        return output.isEmpty();
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack obj = new MyStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.top();
 * boolean param_4 = obj.empty();
 */