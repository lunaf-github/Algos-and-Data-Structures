/*
Strategy: 

  1. create a 1-indexed array of length n*n. This array is used to recored the position of each cell in 
     the correct order, based on the game rules. 
  2. create another 1-indexed array of the same length, this is used to keep track of the minium number of steps
     to reach each position.  

  3. Use BFS, starting at position one. enqueue positin one to start. 
  4. For current cell + 1 to min(curent cell + 6 , n*n), extract the row an column
     Check for next destination, and increment number of steps. 
  5. return the top-left cell value of the array that is keeping the minimum steps. 

*/


/**
 * @param {number[][]} board
 * @return {number}
 */


function Pair(row, col){
 this.row = row;
 this.col = col;
}

var snakesAndLadders = function(board) {
 const n = board.length;
 const cells = new Array(n*n + 1);
 cells[0] = 0;
 
 const columns = new Array(n);
 for(let i = 0; i < n; i++) columns[i] = i;
 
 let label = 1;
 
 for(let row = n - 1; row >= 0; row--){
     for(const col of columns){
         cells[label] = new Pair(row,col);
         label++;
     }
     columns.reverse()
 }
 
 const dist = new Array(n*n + 1);
 dist.fill(-1);
 
 const q = [];
 dist[1] = 0;
 q.push(1);
 // console.log(dist)
 while(q.length > 0){
     const cur = q.shift();

     for(let next = cur + 1; next <= Math.min(cur + 6, n*n); next++){
         const row = cells[next].row;
         const col = cells[next].col;
         
         const destination = board[row][col] !== -1? board[row][col] : next;

         if(dist[destination] === -1){
             dist[destination] = dist[cur] + 1;
             q.push(destination);
         }
     }
 }
 
 return dist[n*n];
};
