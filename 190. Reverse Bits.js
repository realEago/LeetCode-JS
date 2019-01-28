var reverseBits = function(n) {
  let result = 0;
  let temp = 0;
  for (var i = 0;i < 32;i++) {
       result *= 2;
      if ((n & 1) == 1)
          result += 1;
      n = n >> 1;
  }
  return result;
};
//70%
//从n的低位开始一位一位取，取到的是0，result就直接乘2，取到的是1，result就乘2加1