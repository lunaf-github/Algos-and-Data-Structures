/**
 * Clarification Questions for interviewer:
 * 
 * Problem: 
 * Given a reference of a node in a connected undirected graph.
 * Return a deep copy (clone) of the graph.
 * 
 * Questions: 
 * 1. How is the node structured?
 * 2. Is there a limit to the quantity of children each node has?
 * 3. Is the given node the first node of the graph?
 * 4. Is there any loops? repeated edges?
 * 5. Is this a tree, or closed graph?
 */

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

var cloneGraph = function(node) {
 const map = new Map();
 
 function clone(node){
     if(map.has(node)) return map.get(node);
     
     const cloneNode = new Node(node.val)
     map.set(node, cloneNode);
     
     for(const nei of node.neighbors){
         cloneNode.neighbors.push(clone(nei));
     }
     
     return cloneNode;
 }
 return (node)? clone(node) : null;
};