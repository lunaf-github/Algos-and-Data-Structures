class Solution {
    public int orangesRotting(int[][] grid) {

        if (grid == null || grid.length == 0) return -1;

        Queue<int []> q = new LinkedList<>();
        int m = grid.length;
        int n = grid[0].length;
        int freshOranges = 0;
        for(int i = 0; i < m ; i++ ){
            for(int j=0; j < n; j++){
                if(grid[i][j]==2){
                    q.offer(new int[]{i,j});
                }else if(grid[i][j] == 1){
                    freshOranges++;
                }
            }
        }

        int count = 0;

        if (freshOranges == 0) return 0;

        while(!q.isEmpty()){
            int size = q.size();
            count++;
            for(int i = 0; i < size; i++){
                int[][] dirrs = {{0,-1},{0,1},{1,0},{-1,0}};
                int[] point = q.poll();

                for(int[] dir : dirrs ){

                    int x = point[0] + dir[0];
                    int y = point[1] + dir[1];

                    if( x < 0 || y < 0 || x >= m || y >= n || grid[x][y] == 0 || grid[x][y] == 2) continue;

                    grid[x][y] = 2;
                    freshOranges--;
                    q.offer(new int[]{x,y});

                }
            }
        }
        return (freshOranges == 0)? count - 1: -1;
    }
}