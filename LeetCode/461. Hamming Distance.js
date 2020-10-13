var hammingDistance = function(x, y) {
  let a = x ^ y
  let b = 0
  while (a != 0) {
      a = a & (a - 1)
      b++
  }
  return b
};
//Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for Hamming Distance.