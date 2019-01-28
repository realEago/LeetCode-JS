var hasAlternatingBits = function(n) {
  let temp = n & 1
  n = n >> 1
  for (let a = n;a > 0;a = a >> 1) {
      if ((a & 1) != temp) {   //注意符号的优先级
          temp = a & 1
      } else {
          return false
      }
  }
  return true
};
//100%