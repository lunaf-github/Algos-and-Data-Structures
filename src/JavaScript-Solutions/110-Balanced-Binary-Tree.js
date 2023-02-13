/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isBalanced = function(root) {
    
 function branchHeight(root){
     if(!root) return 0;
     
     let left = branchHeight(root.left);
     let right = branchHeight(root.right);
     
     if(left === -1 || 
        right === -1 || 
        Math.abs(right - left) > 1) return -1;  
     
     return Math.max(left, right) + 1;
 }
 
 
 return branchHeight(root) !== -1 
};