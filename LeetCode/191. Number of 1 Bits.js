var hammingWeight = function(n) {
  let result = 0
  while (n != 0) {
      n = n & (n-1)
      result++
  }
  return result
};
//Runtime: 80 ms, faster than 31.58% of JavaScript online submissions for Number of 1 Bits.