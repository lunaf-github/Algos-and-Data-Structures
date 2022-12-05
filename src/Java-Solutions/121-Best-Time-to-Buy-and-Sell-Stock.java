/*
Keep in mind:

We can't have negative profit
To get the max profit, we need the smallest buy price and highest sell price

if we get a negative provit, this means that the buying price is too high. So, need to
change our buying price to the sell price, which at the same time is the lowest value we found.

Have something to keep track of the max profit.

TC: O(n)
SC: O(1)

*/

import java.util.Scanner;
class Solution {
    public static int maxProfit(int[] prices) {
        int maxProfit = 0;
        int buy = 0;

        for(int sell = 1; sell < prices.length; sell++){
            int curProfit = prices[sell] - prices[buy];
            if(curProfit < 0){
                buy = sell;
            }else{
                maxProfit = Math.max(maxProfit , curProfit);
            }
        }
        return maxProfit;
    }

}