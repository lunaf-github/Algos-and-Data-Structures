class Inplace {
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

class OutOfPlace {
    public int numIslands(char[][] grid) {
        int gridLength = grid.length;
        int gridWidth = grid[0].length;
        Set<Integer> visited = new HashSet<>();
        int count = 0;

        for(int r = 0; r < gridLength; r++){
            for(int c = 0; c < gridWidth; c++){
                if(grid[r][c] == '1' && !visited.contains(r*gridWidth + c)){
                    dfs(r,c,visited,grid);
                    count++;
                }
            }
        }

        return count;
    }

    public void dfs(int row, int col, Set<Integer> visited, char[][] grid){
        int gridLength = grid.length;
        int gridWidth = grid[0].length;

        Queue<Integer> q = new LinkedList<>();
        int code = row*gridWidth + col;
        q.add(code);
        visited.add(code);

        while(!q.isEmpty()){
            int size = q.size();
            for(int i = 0; i < size; i++){
                int cur = q.poll();
                int r = cur/gridWidth;
                int c = cur % gridWidth;
                // left
                code = r* gridWidth + c-1;
                if(c - 1 >= 0 && grid[r][c-1] == '1' && !visited.contains(code)){
                    q.add(code);
                    visited.add(code);
                }
                // right
                code = r * gridWidth + (c+1);
                if(c + 1 < gridWidth && grid[r][c+1] == '1' && !visited.contains(code)){
                    q.add(code);
                    visited.add(code);
                }
                // up
                code = (r-1)*gridWidth + c;
                if(r - 1 >= 0 && grid[r-1][c] == '1' && !visited.contains(code)){
                    q.add(code);
                    visited.add(code);
                }
                // down
                code = (r+1)*gridWidth + c;
                if(r + 1 < gridLength && grid[r+1][c] == '1' && !visited.contains(code)){
                    q.add(code);
                    visited.add(code);
                }
            }
        }

    }
}