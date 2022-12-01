// time complexity: O(n)
// space complexity: O(1)

/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all
non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include
letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
    Input: s = "A man, a plan, a canal: Panama"
    Output: true
    Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:
    Input: s = "race a car"
    Output: false
    Explanation: "raceacar" is not a palindrome.
Example 3:
    Input: s = " "
    Output: true
    Explanation: s is an empty string "" after removing non-alphanumeric characters.
    Since an empty string reads the same forward and backward, it is a palindrome.
 */


/*
Stategy:
We need to be able to ignore non-alphanumeric numbers Which includes symbols, punctuations, and white spaces.
Numbers and letters are consideted Alphanumeric

Because we need to check for both sides of our string, it is good to keep track of both the first and last
letters. Once we verified that the character is alphanumeric, we can check if the lowercase values of
the two characters are equal. If they are not, we should return false. If they are equal, we move our
left and right pointers one index closer to each other.

First, we check if the length of the given string affects our logic.
If the length is an even length
cattac
or if the length is odd length
catac

Notice that as the indices shifts closer to eather. If we are dealing with an odd length, the left pointer will
surpass the right pointer at some point. We shoult stop there in order to avoid recalcuations.

If we are dealing with an odd number, There will be point that both pointers will equal to each other. We should
stop calculating here because obviously, the character will equal to itself. Also, if we continue, we will end
up with a left pointer larger than the right pointer.

So, we iterate while left < right

Also, for each iteration, we need to skip non-alphanumeric values. So it is best to include a while for each
pointer. It will move the pointers if the pointer lands on a non-alphanumeric character.

There is a methoc in the charcter class that can check for letters and numbers.
Which is : Character.isLetterOrDigit(char c)

Also, it is a good idea to convert all letters to lowercase at the beginning to reduce operations and
also, check for empty given string.

 */

import java.util.Scanner;
class Solution {

    /*
    First iteration of solution

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

     */

    // optimized and more consized solution

    public static boolean isPalindrome(String s) {
        int l = 0;
        int r = s.length() - 1;
        s = s.toLowerCase();

        while(l < r){
            while(l < r && !Character.isLetterOrDigit(s.charAt(l))) l++;
            while(r > l && !Character.isLetterOrDigit(s.charAt(r))) r--;

            if(s.charAt(l) != s.charAt(r)) return false;
            l++;
            r--;
        }
        return true;
    }

    public static void main(String[] arg){
        Scanner in = new Scanner(System.in);
        System.out.println("Enter String: ");
        String s = in.nextLine();

        String res = "";

        if(isPalindrome(s)){
            res = " a ";
        }else{
            res = " not a ";
        }

        System.out.println("The string is" + res + "palindrome.");
    }
}