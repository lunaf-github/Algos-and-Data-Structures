// Lessons learned.
// Becareful of negative numbers in recursion, it can lead to stack overflow. It has to do something regarding how data is calculated.
// Somehow private modifier on the helper function helps make the code a little faster.

class Solution {
    public double myPow(double x, int n) {
        if(n < 0){
            return 1 / helper(x, -n);
        }

        return helper (x , n);
    }

    private double helper(double x, int n){
        if (n == 0) return 1;

        return n % 2 == 0
                ? helper(x*x , n/2)
                : x * helper(x * x , n/2);

    }

}