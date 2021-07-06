class Solution {
    public int climbStairs(int n) {
        int memo[] = new int[n + 1];
        return climb_Stairs(0, n, memo);
    }
    public int climb_Stairs(int i, int n, int memo[]) {

        if (i > n) {
            return 0;
        }
        if (i == n) {
            return 1;
        }

        if (memo[i] > 0) {  // If input already saved, then return the saved value and terminate current recursion.
            return memo[i];
        }

        memo[i] = climb_Stairs(i + 1, n, memo) + climb_Stairs(i + 2, n, memo);
        return memo[i];
    }
}