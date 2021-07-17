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

// Iterative method
// class Solution {
//     public List<Integer> preorderTraversal(TreeNode root) {
//         List<Integer> list = new LinkedList<>();
//         Stack<TreeNode> pending = new Stack<>();

//         while(root != null){
//             list.add(root.val);

//             if(root.right != null){
//                 pending.push(root.right);
//             }

//             root = root.left;

//             if (root == null && !pending.isEmpty()){
//                 root = pending.pop();
//             }
//         }

//         return list;
//     }
// }


// recusion method
class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> list = new LinkedList<>();
        if(root == null) return list;

        list.add(root.val);
        list.addAll(preorderTraversal(root.left));
        list.addAll(preorderTraversal(root.right));

        return list;
    }
}