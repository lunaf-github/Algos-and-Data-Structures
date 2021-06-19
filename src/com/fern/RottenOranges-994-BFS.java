class Solution {
    public int orangesRotting(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        int freshOrange = 0;
        int level = -1;
        Queue<int[]> q = new LinkedList<>();
        for (int i = 0; i < m; i++ ){
            for(int j = 0; j < n; j++){
                if(grid[i][j] == 2){
                    q.offer(new int[] {i,j});
                }else if(grid[i][j] == 1){
                    freshOrange++;
                }
            }
        }

        if (freshOrange == 0) return 0;

        while (!q.isEmpty()){
            int size = q.size();

            while (size > 0){
                int[] rottenOrange = q.poll();
                int row = rottenOrange[0];
                int col = rottenOrange[1];
                //System.out.println(row + "and" + col);

                for(int i = -1; i < 2; i+=2){
                    int r = row + i;

                    if (r < 0 || r >= m) continue;
                    if (grid[r][col] == 1) {
                        q.offer(new int[] {r,col});
                        grid[r][col] = 2;
                        freshOrange--;
                        //System.out.println(freshOrange);
                    }
                }

                for(int j = -1; j < 2; j+=2){
                    int c  = col + j;

                    if (c < 0 || c >= n) continue;
                    if(grid[row][c] == 1){
                        q.offer(new int[] {row,c});
                        grid[row][c] = 2;
                        freshOrange--;
                        //System.out.println(freshOrange);
                    }
                }

                size--;

            }
            level ++;
            //System.out.println(level);
        }
        if (freshOrange > 0) return -1;
        return level;
    }
}