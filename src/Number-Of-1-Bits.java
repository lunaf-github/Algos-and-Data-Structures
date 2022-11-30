/*
Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

Note:

Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.


Example 1:

    Input: n = 00000000000000000000000000001011
    Output: 3
    Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

Example 2:

    Input: n = 00000000000000000000000010000000
    Output: 1
    Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.

Example 3:

    Input: n = 11111111111111111111111111111101
    Output: 31
    Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.


Constraints:

The input must be a binary string of length 32.


Follow up: If this function is called many times, how would you optimize it?

 */

/*
Strategy:
We can use the Bitwise & to check if the right most bit is a one.

Ex:
n = 2

n     = 00000010
1     = 00000001
n & 1 = 00000000

The bits of both 2 and 1 do not have 1s at the same position. & will return a one at the specific
location if both bytes have 1s in that location.

we can have a counter called ones and set it equal to zero. After each check, we add to this counter.

ones = ones + (n & 1)
    =  0  +   0

Now we shift n using the logical shift >>>, and redo the same operation.

n     = 00000001
1     = 00000001
n & 1 = 00000001

ones = ones + (n & 1)
    =  0  +   1
    = 1

Then shift again. Notice that n becomes zero, so this means that we stop processing until n == 0.

n     = 00000000

return the value of the counter.

 */
import java.util.Scanner;
class NumberOf1Bits {
    public static int hammingWeight(int n){
        int ones = 0;
        while(n != 0){
            ones += (n & 1);
            n = n >>> 1;
        }
        return ones;
    }

    public static void main(String[] arg){
        Scanner in = new Scanner(System.in);
        System.out.println("Enter value for n: ");
        int n = Integer.parseInt(in.nextLine());

        int oneBits = hammingWeight(n);

        System.out.println("There are " + oneBits + " one bits.");
    }
}