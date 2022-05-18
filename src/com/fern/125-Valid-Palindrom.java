// time complexity: O(n)
// space complexity: O(1)

class Solution {
    public boolean isPalindrome(String s) {

        if(s.length() == 0) return true;
        int left = 0;
        int right = s.length() - 1;
        s = s.toLowerCase();

        while(left < right){
            char lchar = s.charAt(left);
            char rchar = s.charAt(right);

            while(!Character.isAlphabetic(lchar) && left < right && !Character.isDigit(lchar)){
                left++;
                lchar = s.charAt(left);
            }
            while(!Character.isAlphabetic(rchar) && right > left && !Character.isDigit(rchar)){
                right--;
                rchar = s.charAt(right);
            }

            if(lchar != rchar) return false;

            left++;
            right--;
        }

        return true;
    }
}