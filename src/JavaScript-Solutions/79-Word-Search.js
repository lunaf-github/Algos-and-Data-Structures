/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const BOARD_WIDTH = board[0].length;
    const BOARD_HEIGHT = board.length;
    // iterate through entire board, for each element, start backtracking
    for (let r = 0; r < BOARD_HEIGHT; r++) {
        for (let c = 0; c < BOARD_WIDTH; c++) {
            if (backtrack(r, c, 0)) return true;
        }
    }

    return false;

    // backtract function, accept postion, current index (letter that we are currently looking for)
    function backtrack(row, col, index) {
        // base case
        //1. if current index is equal to the length of our target word, return true
        if (index === word.length) return true;
        //2. if we are out of bound, return false;
        if (row < 0 || col < 0 || row >= BOARD_HEIGHT || col >= BOARD_WIDTH) return false;
        //3. if current letter is not equal to the letter we are looking for, return false
        //4. if we visited this letter before, return false
        if (board[row][col] !== word[index]) return false;
        
        // mark path by replacing curret letter on board to a # symbol
        board[row][col] = '#';
        // visit all four directions
        const res = (
            backtrack(row + 1, col, index + 1) ||
            backtrack(row - 1, col, index + 1) ||
            backtrack(row, col + 1, index + 1) ||
            backtrack(row, col - 1, index + 1)
        );

        // unmark path by replacing # symble by current ith letter 
        board[row][col] = word[index];

        return res;
    }


};
