var arrangeCoins = function(n) {
  if (n == 1) {
      return 1
  }
  let k = 1
  while (n >= k) {
      n = n - k
      k++
  }
  return k-1
};
//Runtime: 192 ms, faster than 0.00% of JavaScript online submissions for Arranging Coins.
//暴力破解 需要用二分查找做出来