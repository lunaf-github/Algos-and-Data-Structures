class Solution {
    //search for elements that have value of '1'.
    public int numIslands(char[][] grid) {
        int counter = 0;
        for(int i = 0; i < grid.length; i++){
            for(int j = 0; j < grid[0].length; j++){
                if(grid[i][j] == '1'){
                    BFS(grid,i,j);
                    counter ++;
                }
            }
        }
        return counter;
    }

    //find the neightbors and change them to zero. Keep looping until no more neighbors with value
    // '1'.
    public void BFS(char[][] grid,int x, int y){
        grid[x][y] = 0;
        int m = grid[0].length;
        int n = grid.length;
        LinkedList <Integer> queue = new LinkedList<Integer>();
        int code = x*m + y;
        queue.offer(code);

        while (!queue.isEmpty()){
            code = queue.poll();
            int i = code/m;
            int j = code % m;
            if(i > 0 && grid[i - 1][j] == '1'){  // up
                queue.offer((i - 1)*m + j);
                grid[i - 1][j] = '0';
            }
            if(i < n - 1 && grid[i + 1][j] == '1'){  //down
                queue.offer((i + 1)*m + j);
                grid[i + 1][j] = '0';
            }
            if( j > 0 && grid[i][j - 1] == '1'){  //left
                queue.offer(i*m + (j - 1));
                grid[i][j - 1] = '0';
            }
            if( j < m - 1 && grid[i][j + 1 ] == '1'){    //right
                queue.offer(i*m + (j + 1));
                grid[i][j + 1] = '0';
            }

        }
    }
}
}