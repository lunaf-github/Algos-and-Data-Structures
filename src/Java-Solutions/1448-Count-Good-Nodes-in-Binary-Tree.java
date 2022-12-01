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
class Solution{
    public int goodNodes(TreeNode root){
        return dfs(root, root.val);
    }

    public int  dfs(TreeNode node, int maxVal){
        int res = 0;
        if(node == null) return 0;
        if(node.val >= maxVal) res = 1;
        maxVal = Math.max(maxVal , node.val);
        res += dfs(node.left, maxVal);
        res += dfs(node.right, maxVal);
        return res;
    }
}

