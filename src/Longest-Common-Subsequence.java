/*Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

Example 1:

    Input: text1 = "abcde", text2 = "ace"
    Output: 3
    Explanation: The longest common subsequence is "ace" and its length is 3.

Example 2:

    Input: text1 = "abc", text2 = "abc"
    Output: 3
    Explanation: The longest common subsequence is "abc" and its length is 3.

Example 3:

    Input: text1 = "abc", text2 = "def"
    Output: 0
    Explanation: There is no such common subsequence, so the result is 0.


Constraints:

    1 <= text1.length, text2.length <= 1000
    text1 and text2 consist of only lowercase English characters.
 */

/*
Solving the Problem:

Given:
text2 = ace
text1 = abcde


if the first letters are equal, text1[0] == text2[0], we can break this into a sub problem
by replacing the first letters with a value of 1 and adding the sub problem results to it.

1 + {
text2 = ce
text1 = abcde
}

We add one because we found a match and that contributes to the subset's length

But if the first letters don't match, text1[0] != text2[0]
We can't do this. We eitehr break up into two subproblems. Exclude first character of text1 or text2.

text2 = ce
text1 = abcde

or

text2 = ace
text1 = bcde

We can solve this using a matrix

if letters match, go diagonal
if not, go toward the one with the largest value

We start backward, buttom up.

Step1: e = e , so we add 1 + diagonal value = 1 + 0

dp =
  a c e   (j)
a 0 0 0 0
b 0 0 0 0
c 0 0 0 0
d 0 0 0 0
e 0 0 1 0
  0 0 0 0
(i)

Step2: c != 3 , get max of either right or buttom. In this it is 1.
dp =
  a c e
a 0 0 0 0
b 0 0 0 0
c 0 0 0 0
d 0 0 0 0
e 0 1 1 0
  0 0 0 0

Step3: repeat for every element going backwards

  a c e
a 3 2 2 0
b 2 2 2 0
c 2 2 1 0
d 1 1 1 0
e 1 1 1 0
  0 0 0 0

Step4: The cell at the top left will contain the larget subset count.
 */

import java.util.Scanner;
class LongestCommonSubsequence {
    public static int longestCommonSubsequence(String text1, String text2){
        int[][] dp = new int[text2.length() + 1][text1.length() + 1];

        for(int i = text2.length() - 1; i >= 0; i--){
            for(int j = text1.length() -1; j >= 0; j--){
                if(text1.charAt(0) == text2.charAt(0)){
                    dp[i][j] = 1 + dp[i + 1][j + 1];
                }else{
                    dp[i][j] = Math.max(dp[i][j + 1], dp[i + 1][j]);
                }
            }
        }
        return dp[0][0];
    }

    public static void main(String[] arg){
        Scanner in= new Scanner(System.in);
        System.out.println("Enter text1 String");
        String text1 = in.nextLine();

        System.out.println("Enter text2 String");
        String text2 = in.nextLine();

        int subsequenceLength = longestCommonSubsequence(text1,text2);

        System.out.println("Longest subsequence length is: " + subsequenceLength);
    }
}