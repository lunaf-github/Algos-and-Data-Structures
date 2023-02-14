/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
function position(r,c){
 return 
 {
         
 }
}

var pacificAtlantic = function(heights) {
 const n = heights.length;
 const m = heights[0].length;
 
 const pac = new Set();
 const atl = new Set();
 
 function dfs(r, c, visited, prevHeight){
     if(r < 0 || r == n || c < 0 || c == m 
        || visited.has(`${r},${c}`)
        || heights[r][c] < prevHeight
       ) return;       
     
     visited.add(`${r},${c}`)

     dfs(r + 1, c, visited, heights[r][c]);
     dfs(r - 1, c, visited, heights[r][c]);
     dfs(r, c + 1, visited, heights[r][c]);
     dfs(r, c - 1, visited, heights[r][c]);
 }
 
 for(let c = 0; c < m; c++){
     dfs(0, c, pac, heights[0][c]);
     dfs(n - 1, c, atl, heights[n - 1][c]);
 }
 
 for(let r = 0; r < n; r++){
     dfs(r, 0, pac, heights[r][0]);
     dfs(r, m - 1, atl, heights[r][m - 1]);
 }
 
 const res = [];
 
 for(let r = 0; r < n; r++){
     for(let c = 0; c < m; c++){
         if(pac.has(`${r},${c}`) && atl.has(`${r},${c}`)) res.push([r,c]);
     }
 }
 
 return res;
};