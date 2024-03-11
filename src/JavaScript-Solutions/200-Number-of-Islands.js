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


/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

  // deep copy
  const gridCopy = grid.map(row => {
      return [...row];
  })

  const GRID_WIDTH = gridCopy[0].length;
  const GRID_HEIGHT = gridCopy.length;

  let numIslands = 0;

  for (let r = 0; r < GRID_HEIGHT; r += 1) {
      for (let c = 0; c < GRID_WIDTH; c += 1) {
          if (gridCopy[r][c] === '1') {
              numIslands += 1;
              exploreIsland(r, c);
          }
      }
  }

  return numIslands;

  // *******************************
  function exploreIsland(row, col) {
      // check boundaries
      if (row < 0 || row >= GRID_HEIGHT) return;
      if (col < 0 || col >= GRID_WIDTH) return;

      // prevent revisiting or exploring outside island
      if (gridCopy[row][col] === '0') return;

      // mark visited position
      gridCopy[row][col] = '0';

      // explore
      exploreIsland(row + 1, col);
      exploreIsland(row - 1, col);
      exploreIsland(row, col + 1);
      exploreIsland(row, col - 1);
  }
};



// test
const grid = [
 ["1","1","0","0","0"],
 ["1","1","0","0","0"],
 ["0","0","1","0","0"],
 ["0","0","0","1","1"]
]
console.log(numIslands(grid))