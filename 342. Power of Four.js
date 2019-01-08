var isPowerOfFour = function(n) {
  if (n <= 0) {
      return false
  }
  return ((n & (n - 1))== 0) && ((n & 0b10101010101010101010101010101010) == 0)
};
//(n & (n - 1))== 0 判断是否是2的倍数
//由于4的倍数的二进制数的1总在奇数位上，与101010做与运算若为零则说明是在奇数位上
//Runtime: 68 ms, faster than 100.00% of JavaScript online submissions for Power of Four.