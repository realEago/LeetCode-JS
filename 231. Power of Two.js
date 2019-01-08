var isPowerOfTwo = function(n) {
  if (n <= 0) {
      return false
  }
  return (n & (n - 1)) == 0 
};
//0b1000
//0b0111 &
//与运算后为零
//Runtime: 72 ms, faster than 99.04% of JavaScript online submissions for Power of Two.