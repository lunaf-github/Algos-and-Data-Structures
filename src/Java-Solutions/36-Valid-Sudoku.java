// time complexity = O(n);
// space complexity = O(1);

class Solution {
    public boolean isValidSudoku(char[][] board) {
        HashSet<String> seen = new HashSet<>();

        for(int col = 0; col < board.length; col++){
            for(int row = 0; row < board[0].length; row++ ){

                char element = board[col][row];

                // use the return value of the add method to check for valid row, col, and box
                // add method returns true if the number that was added did not exist in the Set
                if(element != '.'){
                    if(!seen.add(element + "at row" + row) ||
                            !seen.add(element + "at col" + col) ||
                            !seen.add(element + "at box" + row/3 + "-" + col/3)) return false;
                }

            }
        }

        return true;
    }
}