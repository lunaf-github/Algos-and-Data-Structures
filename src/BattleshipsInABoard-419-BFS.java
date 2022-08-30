class Solution {
    public int countBattleships(char[][] board) {
        int row = board.length;
        int col = board[0].length;
        Queue<int[]> q = new LinkedList<>();
        Set<int[]> visited = new HashSet<>();

        for(int r = 0; r < row; r++){
            for(int c = 0; c < col; c++){
                if(board[r][c] == 'X'){
                    q.offer(new int[]{r,c});
                }
            }
        }

        int count = q.size();

        while (!q.isEmpty()){
            int[] cell = q.poll();

            int r = cell[0];
            int c = cell[1];

            board[r][c] = 'e';

            if( r + 1 < row && board[r+1][c] == 'X' ){
                board[r + 1][c] = 'e';
                count--;
            }
            if( r - 1 > 0 && board[r-1][c] == 'X' ){
                board[r-1][c] ='e';
                count--;
            }
            if( c+1 < col && board[r][c + 1] == 'X' ){
                board[r][c + 1] = 'e';
                count--;
            }
            if( c-1 > 0 && board[r][c-1] == 'X' ){
                board[r][c-1] = 'e';
                count--;
            }
        }

        return count;
    }
}