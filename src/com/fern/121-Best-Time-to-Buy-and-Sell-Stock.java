class Solution {
    public int maxProfit(int[] prices) {
        int left = 0;
        // int minPrice = prices[0];
        int maxProfit = 0;

        for(int right = 1; right < prices.length; right++){
            int curProfit = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit, curProfit);
            if(prices[right] < prices[left]) left = right;
        }

        return maxProfit;
    }
}