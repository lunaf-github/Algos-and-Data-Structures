/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

//DFS recursive:

class Solution {
    public int maxDepth(TreeNode root) {
        if(root == null) return 0;

        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }
}


// DFS Iterative: Preorder

class Solution {
    public int maxDepth(TreeNode root) {
        if(root == null) return 0;

        Stack<TreeNode> stack = new Stack<>();
        Stack<Integer> value = new Stack<>();

        int max = 0;
        stack.push(root);
        value.push(1);

        while(!stack.isEmpty()){
            TreeNode curr = stack.pop();
            int level = value.pop();
            max = Math.max(max, level);

            if(curr.left != null){
                stack.push(curr.left);
                value.push(level + 1);
            }
            if(curr.right != null){
                stack.push(curr.right);
                value.push(level + 1);
            }
        }

        return max;


    }
}


// BFS Iterative

class Solution{
    public int maxDepth(TreeNode root){
        if(root == null) return 0;

        Queue<TreeNode> q = new LinkedList<>();
        int counter = 0;
        q.offer(root);

        while(!q.isEmpty()){
            int qLength = q.size();
            for(int i = 0; i < qLength; i++){
                TreeNode curr = q.poll();
                if(curr.left != null) q.offer(curr.left);
                if(curr.right != null) q.offer(curr.right);
            }
            counter++;
        }

        return counter;
    }
}




