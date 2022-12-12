/**

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return 
the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water.

Example 1:

  Input: grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
  Output: 1

Example 2:

  Input: grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]
  Output: 3

Constraints:
  m == grid.length
  n == grid[i].length
  1 <= m, n <= 300
  grid[i][j] is '0' or '1'.
*/


function numIsland(grid){
  const gridLength = grid.length;
  const gridWidth = grid[0].length;

  const gridClone = [...grid];
  let count = 0;

  function dfs(row, col){
    count++;
    const q = [];
    q.push([row,col]);

    while(q.length !== 0){
      const size = q.length;
      for(let z = 0; z < size; z++){
        const cur = q.shift();
        const r = cur[0];
        const c = cur[1];

        // left
        if(c - 1 >= 0 && gridClone[r][c-1] === '1'){
          q.push([r,c-1]);
          gridClone[r][c-1] = '0';
        }
        // right
        if(c + 1 < gridWidth && gridClone[r][c+1] === '1'){
          q.push([r,c+1]);
          gridClone[r][c+1] = '0';
        }
        // up
        if(r - 1 >= 0 && gridClone[r-1][c] === '1'){
          q.push([r-1,c]);
          gridClone[r-1][c] = '0';
        }
        // down
        if(r + 1 < gridLength && gridClone[r+1][c] === '1'){
         q.push([r+1,c]);
         gridClone[r+1][c] = '0';
        }        
      }
    }
  }

  for(let i = 0; i < gridLength; i++){
    for(let j = 0; j < gridWidth; j++){
      if(gridClone[i][j] === '1') dfs(i,j);
    }
  }

  return count;
}

const grid = [
 ["1","1","0","0","0"],
 ["1","1","0","0","0"],
 ["0","0","1","0","0"],
 ["0","0","0","1","1"]
]
console.log(numIsland(grid))