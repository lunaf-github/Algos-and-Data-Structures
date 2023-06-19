/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
 const GRID_WIDTH = grid[0].length;
 const GRID_HEIGHT = grid.length;
 
 // scan matrix, look for rotten oranges
 let q = [];
 let time = 0;
 let freshOranges = 0;
 
 for (let row = 0; row < GRID_HEIGHT; row++) {
     for (let col = 0; col < GRID_WIDTH; col++) {
         if (grid[row][col] === 2) q.push({row, col});
         if (grid[row][col] === 1) freshOranges++;
     }
 }

 // BFS
 while (q.length > 0 && freshOranges > 0) {
     const levelSize = q.length;
     time++;
     for (let i = 0; i < levelSize; i++) {
         const rottenOrange = q.shift();
         const row = rottenOrange.row;
         const col = rottenOrange.col;
         
         // left
         if (col - 1 >= 0 && grid[row][col - 1] === 1) {
             q.push({row, col: col - 1});
             grid[row][col - 1] = 2;
             freshOranges--;
         }
         // up
         if (row - 1 >= 0 && grid[row - 1][col] === 1) {
             q.push({row: row - 1, col});
             grid[row - 1][col] = 2;
             freshOranges--;
         }
         // right
         if (col + 1 < GRID_WIDTH && grid[row][col + 1] === 1) {
             q.push({row, col: col + 1});
             grid[row][col + 1] = 2;
             freshOranges--;
         }
         // down
         if (row + 1 < GRID_HEIGHT && grid[row + 1][col] === 1) {
             q.push({row: row + 1, col});
             grid[row + 1][col] = 2;
             freshOranges--;
         }
     }
 } 
 
 return (freshOranges)? -1 : time;
};