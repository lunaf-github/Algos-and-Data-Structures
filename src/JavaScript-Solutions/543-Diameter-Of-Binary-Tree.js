/*
  Vague Inteview question:
  Given the root of a binary tree, return the length of the 
  diameter of the tree.

  Questions:
  1. Define diameter. (I need to know what is a diameter). 
      The diameter of a binary tree is the length of the longest 
      path between any two nodes in a tree. This path may or may 
      not pass through the root.
  2. How do you define the length? Number of nodes that connect? or
     is it the edges?  (I need to know how the edges are counted)
     The length of a path between two nodes is represented by the 
     number of edges between them.
  3. What is the smallest tree size? Largest? The number of nodes in 
     the tree is in the range [1, 104].

  test cases:
  1.
  Given:
        1
       / \
      2   3
     / \
    4   5 
    
  output: 3 (3 edges between node 4 and 3) or (3 edges between 5 and 3)

  2. 
  given: 
        1
  output: 0

  3. 
  given: 
        1
         \
          2
  output: 2

  4. 

   Given:
        1
       / 
      2   
     / \
    4   5 
   /     \
  8       7


High level strategy:
  Performing dfs, buttom up
  # edges = # nodes - 1

psuedo code:

recursion(current node)
  if current = null return 0

  left = recurse (returns length of left branch)
  right = recurse (returns length of right branch)

  maxLength = max(left + right, maxLength)

  return 1 + Max(left or right)
*/


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
 * @return {number}
 */

var diameterOfBinaryTree = function(root) {
 let max = 0;
 
 function dfs(curNode){
     if(!curNode) return 0;
     
     const left = dfs(curNode.left);
     const right = dfs(curNode.right);
     
     max = Math.max(left + right, max);
     
     return 1 + Math.max(left,right);
 }
 
 dfs(root);
 
 return max;
};