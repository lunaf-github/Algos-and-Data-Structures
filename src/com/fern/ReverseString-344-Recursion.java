// lessons learned.
// Only need to declare variables once.
// The helper method needs to call itself
// The main method is the catalyst that starts the recursion
// in a void return type function, do not return results of helper function.
// Make sure to plan the end of the recursion. Recursive always unstacks itself.
// Does not matter if you place helper function first or last.


class Solution {
    public void reverseString(char[] s) {
        helper(s, 0, s.length -1);
    }

    public void helper(char[] s, int left , int right){
        if (left >= right) return;
        char temp = s[left];
        s[left++] = s[right];
        s[right--] = temp;
        helper(s, left, right);
    }
}