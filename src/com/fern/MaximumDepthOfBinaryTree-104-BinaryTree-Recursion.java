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
// class Solution {
//     public int maxDepth(TreeNode root) {
//         if(root == null) return 0;
//         return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
//     }
// }

class Solution {

    public int maxDepth(TreeNode root) {
        return helper (root, 0);
    }

    private int helper(TreeNode root, int depth){
        if(root == null) return depth;
        int left = helper(root.left, depth + 1);
        int right = helper(root.right, depth + 1);
        depth = Math.max(left, right);
        return depth;
    }

}