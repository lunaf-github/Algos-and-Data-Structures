/**
 * 695. Max Area of Island
 * 
 * Vague Interview Question:
 * You are given an m x n binary matrix grid. An island is a group of 1's (representing land) 
 * connected 4-directionally (horizontal or vertical.) You may assume all four edges of the 
 * grid are surrounded by water.
 * 
 * The area of an island is the number of cells with a value 1 in the island.
 * Return the maximum area of an island in grid
 * 
 * Questions:
 * 1. What is water represented as? as 0s
 * 2. Is it garanteed that there will be at least one island? if not, what should I return
 *    if there is no islands? Not garanteed, return 0
 * 3. What is the largest matrix size? 50
 * 4. What is the smallest matrix size? 1
 * 
 * High level strategy:
 * 1. delcare a counter
 * 2. Iterate through the entire matrix
 * 3. for each iteration, if the current element is equal to 1,  perfrom DFS, increment count
 * 
 * DFS: recurse: left, right, up , down positions
 *      basecase: stop if current element is equal to 0
 *      To avoid revisiting elements, change current element to a 0
 * 
 * 
 * Test Cases:
 * 1. [[1]]    // 1
 * 2. [[0]]    // 0
 * 3. [[1,0],  // 1
 *     [1,0]]
 * 4. [[1,0,1],  // 2
 *     [1,0,1]
 *     [1,0,0]]
 * 
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */

var maxAreaOfIsland = function(grid) {
 let n = grid.length;
 let m = grid[0].length;
 
 function dfs(row, col){
     let curArea = 0;

     grid[row][col] = 0;
     
     //up
     if(row > 0 && grid[row - 1][col] !== 0){
        curArea += dfs(row - 1, col);  
     } 
     
     //down
     if(row < n - 1 && grid[row + 1][col] !== 0){
        curArea += dfs(row + 1, col);
     } 
     
     //left
     if(col > 0 && grid[row][col - 1] !== 0){
         curArea += dfs(row, col - 1);
     } 
     
     //right
     if(col < m - 1 && grid[row][col + 1]){
         curArea += dfs(row, col + 1);
     } 
     
     return 1 + curArea;
 }
 
 let maxArea = 0;
 
 for(let r = 0; r < n; r++){
     for(let c = 0; c < m; c++){
         if(grid[r][c] === 1){
             maxArea = Math.max(maxArea, dfs(r,c));
         }
     }
 }
 
 return maxArea;
 
};


