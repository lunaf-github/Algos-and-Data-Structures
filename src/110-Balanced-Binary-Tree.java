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

// Time complexity: O(n);
// space complexity: O(n)

// Method: DFS Postorder

// Notes: Because it will get complicated if we try to return a booleon and a int from our
//        functions. It is best to return the current height and "-1" which represents false.

class Solution {
    public boolean isBalanced(TreeNode root) {
        if(root == null) return true;
        return depth(root) != -1;

    }

    public int depth(TreeNode node){
        if(node == null) return 0;

        int left = depth(node.left);
        if(left == -1) return -1;

        int right = depth(node.right);
        if(right == -1) return -1;

        if(Math.abs(left - right) > 1) return -1;
        return Math.max(left,right) + 1;

    }
}