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
    int preorderValue;

    public TreeNode buildTree(int[] preorder, int[] inorder) {
        if(preorder == null || inorder == null || preorder.length != inorder.length) return null;
        HashMap <Integer, Integer> hm = new HashMap <Integer, Integer> ();
        preorderValue = 0;
        for(int i = 0; i < inorder.length; i++){
            hm.put(inorder[i], i);
        }
        return buildTree(preorder, 0, preorder.length - 1, hm);
    }

    private TreeNode buildTree(int[] preorder, int left, int right, HashMap<Integer, Integer> hm){
        if (left > right) return null;
        int rootvalue = preorder[preorderValue++];
        TreeNode root = new TreeNode(rootvalue);
        root.left = buildTree(preorder, left , hm.get(rootvalue) -1, hm);
        root.right = buildTree(preorder, hm.get(rootvalue) + 1, right, hm);
        return root;
    }
}