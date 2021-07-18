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
//     public List<Integer> inorderTraversal(TreeNode root) {
//         List<Integer> list = new LinkedList<>();
//         Stack<TreeNode> stack = new Stack<>();
//         TreeNode curr = root;
//         while(curr != null || !stack.isEmpty()){

//             while(curr != null){
//                 stack.push(curr);
//                 curr = curr.left;
//             }

//             curr = stack.pop();

//             list.add(curr.val);
//             curr = curr.right;
//         }

//         return list;
//     }
// }

class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> list = new LinkedList<>();
        if(root == null) return list;
        helper(root, list);
        return list;
    }

    private void helper(TreeNode root, List<Integer> list){
        if(root != null){
            helper(root.left, list);
            list.add(root.val);
            helper(root.right, list);
        }

    }
}