/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
 const gridWidth = grid[0].length
 const gridLength = grid.length;
 const positionMap = new Map();
 const minHeap = new MinPriorityQueue();
 let maxHeight = 0;

 minHeap.enqueue(grid[0][0]);
 positionMap.set(grid[0][0], [0,0]);

 while(minHeap.size() !== 0){
     const curValue = minHeap.dequeue().element;
     const curPosition = positionMap.get(curValue);
     const[curRow, curCol] = curPosition;
     
     if(curRow == gridLength - 1 && curCol == gridWidth -1) return Math.max(maxHeight, grid[curRow][curCol]);
     
     maxHeight = Math.max(maxHeight, curValue);
     grid[curRow][curCol] = "visited";

     //left
     if(curCol - 1 >= 0 && grid[curRow][curCol - 1] != "visited" ){
         minHeap.enqueue(grid[curRow][curCol - 1]);
         positionMap.set(grid[curRow][curCol - 1], [curRow, curCol - 1]);
     }
     
     //right
     if(curCol + 1 < gridWidth && grid[curRow][curCol + 1] != "visited"){
         minHeap.enqueue(grid[curRow][curCol + 1]);
         positionMap.set(grid[curRow][curCol + 1], [curRow, curCol + 1]);
     }
     
     //up
     if(curRow - 1 >= 0 && grid[curRow - 1][curCol] != "visited"){
         minHeap.enqueue(grid[curRow - 1][curCol]);
         positionMap.set(grid[curRow - 1][curCol], [curRow - 1, curCol]);
     }
     //down
     if(curRow + 1 < gridLength && grid[curRow + 1][curCol] != "visited"){
         minHeap.enqueue(grid[curRow + 1][curCol]);
         positionMap.set(grid[curRow + 1][curCol], [curRow + 1, curCol]);
     }
 }
 
 return maxHeight;
};