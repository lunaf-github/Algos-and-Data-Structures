/**
 * 886. Possible Bipartition

We want to split a group of n people (labeled from 1 to n) into two groups of 
any size. Each person may dislike some other people, and they should not go 
into the same group.

Given the integer n and the array dislikes where dislikes[i] = [ai, bi] indicates 
that the person labeled ai does not like the person labeled bi, return true if it 
is possible to split everyone into two groups in this way.

Example 1:
  Input: n = 4, dislikes = [[1,2],[1,3],[2,4]]
  Output: true
  Explanation: The first group has [1,4], and the second group has [2,3].
Example 2:
  Input: n = 3, dislikes = [[1,2],[1,3],[2,3]]
  Output: false
  Explanation: We need at least 3 groups to divide them. We cannot put them in two groups.

Constraints:
  1 <= n <= 2000
  0 <= dislikes.length <= 104
  dislikes[i].length == 2
  1 <= ai < bi <= n
  All the pairs of dislikes are unique.
 */

  /**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */

var possibleBipartition = function(n, dislikes) {
    
 const graph = Array.from(Array(n + 1), adjacents => []);
 
 for(const dis of dislikes){
     graph[dis[0]].push(dis[1]);
     graph[dis[1]].push(dis[0]);
 }
 
 const colors = new Array(n + 1);
 
 function dfs(curNode, curColor){
     colors[curNode] = curColor;
     for(const adj of graph[curNode]){
         if(!colors[adj]){
             if(!dfs(adj, curColor * -1)) return false;
         }else if(colors[adj] === curColor){
             return false;
         }
     }
     return true;
 }
 
 
 for(let i = 1; i <= n; i++){
     if(!colors[i] && !dfs(i,1)) return false;
 }
 
 return true;
};