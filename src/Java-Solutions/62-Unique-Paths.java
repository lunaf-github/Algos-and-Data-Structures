import java.util.Scanner;
import java.util.Arrays;
class Solution {
    public static int uniquePaths(int m, int n){
        int[] row = new int[n];
        Arrays.fill(row, 1);

        for(int i = 1; i < m; i++){
            int[] newRow = new int[n];
            newRow[n - 1] = 1;
            for(int j = n - 2; j >= 0; j--){
                newRow[j] = newRow[j + 1] + row[j];
            }
            row = newRow;
        }
        return row[0];
    }

    public static void main(String[] args){
        Scanner obj = new Scanner(System.in);
        System.out.println("Enter number of columns: ");
        int n = Integer.parseInt(obj.nextLine());
        System.out.println("Enter number of rows: ");
        int m = Integer.parseInt(obj.nextLine());
        System.out.println("Number of unique paths are: " + uniquePaths(m,n));
    }
}