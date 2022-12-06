class KthLargest {
    int size;
    PriorityQueue<Integer> minheap;

    public KthLargest(int k, int[] nums) {
        this.size = k;
        this.minheap = new PriorityQueue<>();
        for(int num : nums){
            minheap.add(num);
            if(minheap.size() > size) minheap.poll();
        }
    }

    public int add(int val) {
        minheap.add(val);
        if(minheap.size() > size) minheap.poll();
        return minheap.peek();
    }
}

}

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest obj = new KthLargest(k, nums);
 * int param_1 = obj.add(val);
 */