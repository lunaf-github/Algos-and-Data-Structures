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
    public boolean check(TreeNode p, TreeNode q){
        if(p == null & q == null) return true;
        if(p == null || p == null) return false;
        if(p.val != q.val) return false;
        return true;
    }

    public boolean isSameTree(TreeNode p, TreeNode q) {
        Queue <TreeNode> pQueue = new LinkedList<>();
        Queue <TreeNode> qQueue = new LinkedList<>();

        if(p == null && q == null) return true;
        if(p == null || q == null) return false;

        pQueue.offer(p);
        qQueue.offer(q);


        while(!pQueue.isEmpty() && !qQueue.isEmpty()){
            TreeNode tempq = qQueue.poll();
            TreeNode tempp = pQueue.poll();

            if(tempq.val != tempp.val) return false;

            if(tempq.left != null) qQueue.offer(tempq.left);
            if(tempp.left != null) pQueue.offer(tempp.left);

            if(pQueue.size() != qQueue.size()) return false;

            if(tempq.right != null) qQueue.offer(tempq.right);
            if(tempp.right != null) pQueue.offer(tempp.right);

            if(pQueue.size() != qQueue.size()) return false;

        }

        return pQueue.size() == qQueue.size();

    }
}