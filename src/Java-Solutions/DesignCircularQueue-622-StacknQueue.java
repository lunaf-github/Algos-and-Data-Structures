class MyCircularQueue {
    final int[] ARRAY;
    int start;
    int end = -1;
    int len = 0;


    public MyCircularQueue(int k) {
        ARRAY = new int[k];
    }

    public boolean enQueue(int value) {
        if (!isFull()){
            end = (end + 1) % ARRAY.length;
            ARRAY[end] = value;
            len++;
            return true;
        }
        return false;
    }

    public boolean deQueue() {
        if(!isEmpty()){
            start = (start + 1) % ARRAY.length;
            len--;
            return true;
        }
        return false;
    }

    public int Front() {
        return isEmpty()? -1 : ARRAY[start];
    }

    public int Rear() {
        return isEmpty()? -1 : ARRAY[end];
    }

    public boolean isEmpty() {
        return len == 0;
    }

    public boolean isFull() {
        return len == ARRAY.length;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * MyCircularQueue obj = new MyCircularQueue(k);
 * boolean param_1 = obj.enQueue(value);
 * boolean param_2 = obj.deQueue();
 * int param_3 = obj.Front();
 * int param_4 = obj.Rear();
 * boolean param_5 = obj.isEmpty();
 * boolean param_6 = obj.isFull();
 */