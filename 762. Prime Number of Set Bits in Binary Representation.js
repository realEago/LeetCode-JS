var countPrimeSetBits = function(L, R) {
  let map = [2,3,5,7,11,13,17,19]
  let result = 0
  for (let a = L;a <= R;a++) {
      let num = 0
      let b = a
      while (b > 0) {
          num += b & 1
          b = b >> 1
      }
      if (map.includes(num)){
          result++
      }
  }
  return result
};
//计算这个数的二进制有多少个一
//与1 相与 结果为1则说明末尾为1，然后右移一位

//Runtime: 92 ms, faster than 80.00% of JavaScript online submissions for Prime Number of Set Bits in Binary Representation.
