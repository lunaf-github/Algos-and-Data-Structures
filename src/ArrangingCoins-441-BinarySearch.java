class Solution {
    public int arrangeCoins(int n) {
        /* this leetCode can be solved matematically using geometry. Area of triable formula.
         * A = 1/2 b*h + base Area. Triangle is raised by one unit .
         * A = 1/2 b*h + b*1 <- base hight is one block.
         * hight is the same as the base lenght b = h
         * A = 1/2 b*b + b
         * 2A = b^2 + b
         * 0 = b^2 + b - 2A
         * Use quadratic formula to find x.
         * we can ignore the negative equation becuase we only get positive amount of
         * blocks.
         */

        // return (int)((-1 + Math.sqrt(1 + 8 * (long)n)) / 2);


        // Another way is binary search

        long left = 0L;
        long right = (long)n;
        long curr;

        while(left <= right){
            // The number of rows with (n) blocks will be less than the total number
            // of blocks. The answer has to be somewhere between 0 and n.

            long mid = left + (right - left)/2;
            //We start from the middle
            //Because the triangle is an equilateral triangle, the mid is the length of
            //triangle that n about of blocks could make. Length == height because it's
            //a equilateral triangle.
            //curr is the amount of blocks a tringle will have it it has "mid" amount
            //of blocks
            curr = mid*(mid + 1)/2;

            // if curr is actually equal to the given number of blocks, we found the
            // size of the traingle. return mid.
            if(n == curr) return (int)mid;

            // if cure is greater than n, that means the "mid" triangle size is too large
            // The number of rows need to be smaller than mid.
            if(n < curr){
                right = mid - 1;
            }else{
                left = left + 1;
            }
        }
        //return right. Right + 1 = left.
        //
        return (int)right;

    }
}