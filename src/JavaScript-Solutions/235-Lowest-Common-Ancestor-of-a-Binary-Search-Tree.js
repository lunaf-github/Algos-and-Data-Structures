/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// TC: O(H), H = height of binary search tree
// SP: O(1)

// Only 3 options, 
// 1. both nodes are on the left side
// 2. both nodes are on the right side
// 3. 1 node on the left, 1 node on the right

// Constraints:
    // The number of nodes in the tree is in the range [2, 105].
    // -109 <= Node.val <= 109
    // All Node.val are unique.
    // p != q
    // p and q will exist in the BST.

// recursive
var lowestCommonAncestor = function(root, p, q) {
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    } else if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    } else {
        return root;
    }
};

// Iterative
var lowestCommonAncestor = function(root, p, q) {
    let node = root;

    while (node) {
        if (q.val < node.val && p.val < node.val) node = node.left;
        else if (q.val > node.val && p.val > node.val) node = node.right;
        else return node;
    }

    return node;
};