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
class Solution {

    TreeNode nextNode;

    public TreeNode searchBST(TreeNode root, int val) {


        if(root == null|| root.val == val ) return root;

        if(root.val > val){
            nextNode = root.left;

        }else{
            nextNode = root.right;
        }

        return searchBST (nextNode, val);
    }


}