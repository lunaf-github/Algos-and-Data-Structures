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

// DFS - recursively
// cases: if subroot is  null but root is not then return true;
//        if root is false but subroot is not then return true
//        If both subroot and root are null return true;
//

class Solution {
    public boolean isSubtree(TreeNode root, TreeNode subRoot) {
        if(subRoot == null) return true;
        if(root == null) return false;

        if(isSame(root, subRoot)) return true;

        return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);

    }

    public boolean isSame(TreeNode p, TreeNode q){
        if(p == null && q == null) return true;
        if(p != null && q != null && p.val == q.val) return isSame(p.left, q.left) && isSame(p.right, q.right);

        return false;
    }
}