
// 1. can't buy stock after sell, 1 day cooldown
// 2. When we buy a stock, there was a cool down the day before
// 3. if we buy at prices[2], no purchases were made before
// 4. profit is when sellingPrice > buying price
// 4. maxProfit = sum off profits (highest selling price - lowest buying)

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   //Buy = i + 1  
   //Sell = i + 2 (because of cool down after selling)
   function MaxProfit() {
       this.buy = -1;
       this.sell = -1;
   }
   
   const dp = Array.from(Array(prices.length), x => new MaxProfit); // dp = [{buy: maxprofit, sell: maxprofit}, {}, {}, {},...]
  
   function dfs(i, buying){
       if(i >= prices.length) return 0;

       if(dp[i].buy >= 0 && buying === true) return dp[i].buy;
       if(dp[i].sell >= 0 && buying === false) return dp[i].sell
       
       const cooldown = dfs(i + 1, buying)
       
       if(buying){
           const buy = dfs(i + 1, !buying) - prices[i] 
           dp[i].buy = Math.max(buy, cooldown);
           return dp[i].buy
       }else{
           const sell = dfs(i + 2, !buying) + prices[i];
           dp[i].sell = Math.max(sell, cooldown);
           return dp[i].sell
       }
   }

   
   return dfs(0,true);
   
};

