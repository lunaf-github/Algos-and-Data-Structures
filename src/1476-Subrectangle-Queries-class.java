class SubrectangleQueries {
    // create an empty integer matrix
    int[][] rectangle;

    public SubrectangleQueries(int[][] rectangle) {
        // set empty integer matrix to the give integer matrix
        this.rectangle = rectangle;
    }

    public void updateSubrectangle(int row1, int col1, int row2, int col2, int newValue) {
        // for loop from left to right. starting from col1 to col2
        for(int i = row1; i <= row2 ;i++){
            // forloop from top to bottom. starting from row1 to row2
            for(int j=col1; j <= col2; j++){
                // change value of each element to the new value
                rectangle[i][j] = newValue;
            }
        }
    }

    public int getValue(int row, int col) {
        //return value at position row and col
        if(row <= rectangle.length || col <= rectangle[0].length) return rectangle[row][col];
        return -1;
    }
}

/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 * SubrectangleQueries obj = new SubrectangleQueries(rectangle);
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue);
 * int param_2 = obj.getValue(row,col);
 */