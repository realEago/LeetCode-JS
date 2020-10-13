var maxProfit = function(prices) {
  let max = 0
  for (let a = 0;a < prices.length - 1;a++) {
      for (let b = a + 1;b < prices.length;b++) {
          prices[b] - prices[a] > max ? max = prices[b] - prices[a] : undefined
      }
  }
  return max
};
//Runtime: 360 ms, faster than 21.53% of JavaScript online submissions for Best Time to Buy and Sell Stock.