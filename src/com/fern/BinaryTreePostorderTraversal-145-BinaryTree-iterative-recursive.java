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

// Iterative
// class Solution {
//     public List<Integer> postorderTraversal(TreeNode root) {
//         List<Integer> list = new ArrayList<>();
//         if (root == null) return list;
//         Stack<TreeNode> stack = new Stack<>();
//         stack.push(root);

//         while(!stack.isEmpty()){
//             root = stack.pop();
//             list.add(0, root.val);
//             if(root.left != null) stack.push(root.left);
//             if(root.right != null) stack.push(root.right);
//         }

//         return list;
//     }
// }

//Recursion
class Solution {
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> list = new ArrayList<>();
        helper(root, list);
        return list;
    }

    private void helper(TreeNode root, List<Integer> list){
        if (root == null) return;
        helper(root.left , list);
        helper(root.right, list);

        list.add(root.val);
    }
}