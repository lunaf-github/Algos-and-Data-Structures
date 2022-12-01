class KthLargest {
    int k;
    TreeNode root;
    public KthLargest(int k, int[] nums) {
        this.k = k;
        for(int num: nums) root = add(root, num);

    }

    public TreeNode add(TreeNode root, int val){
        if (root == null) return new TreeNode(val);
        root.count++;
        if(val > root.val) root.right = add(root.right, val);
        else root.left = add(root.left, val);
        return root;
    }

    public int add(int val) {
        root = add(root,val);
        return kLargest();
    }

    public int kLargest(){
        int count = k;
        TreeNode walker = root;

        while(count > 0){
            int pos = 1 + (walker.right != null? walker.right.count : 0);
            if(count == pos) break;
            if(count < pos) walker = walker.right;
            if(count > pos) {
                count -= pos;
                walker = walker.left;
            }
        }

        return walker.val;
    }


    class TreeNode {
        int count = 1;
        int val;
        TreeNode right;
        TreeNode left;
        public TreeNode(int v){val = v;}
    }


}

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest obj = new KthLargest(k, nums);
 * int param_1 = obj.add(val);
 */