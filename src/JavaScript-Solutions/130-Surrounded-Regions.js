/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var solve = function(board) {
 const boardWidth = board[0].length;
 const boardHeight = board.length;
   
   
 //top row
 for (let col = 0; col < boardWidth; col += 1) {
     if (board[0][col] === 'O') explore(0, col);
 }
 //bottom row
 for (let col = 0; col < boardWidth; col += 1) {
     if (board[boardHeight - 1][col] === 'O') explore(boardHeight - 1, col);
 }
 //left col
 for (let row = 0; row < boardHeight; row += 1) {
     if (board[row][0] === 'O') explore(row, 0);
 }
 //right col
 for (let row = 0; row < boardHeight; row += 1) {
     if (board[row][boardWidth - 1] === 'O') explore(row, boardWidth - 1);
 }

 for (let row = 0; row < boardHeight; row += 1) {
     for (let col = 0; col < boardWidth; col += 1) {
         if (board[row][col] === 'O') board[row][col] = 'X';
         if (board[row][col] === '-') board[row][col] = 'O';
     }
 }
   
 return board;
   
 // ***************************************************
   
 function explore(row,col) {
     board[row][col] = '-';
     
     //up
     if (row - 1 >= 0 && board[row - 1][col] === 'O') {
         explore(row - 1, col);
     }
     //down
     if (row + 1 < boardHeight && board[row + 1][col] === 'O') {
         explore(row + 1, col);
     }
     //left
     if (col - 1 >= 0 && board[row][col - 1] === 'O') {
         explore(row, col - 1);
     }
     //right
     if (col + 1 < boardWidth && board[row][col + 1] === 'O') {
         explore(row, col + 1);
     }
 }
};