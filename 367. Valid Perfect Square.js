var isPerfectSquare = function(num) {
  let a = num
  while( a * a - num > 0.00000001) {
      a = 0.5 * a + 0.5 * (num / a)
  }
  a = a.toFixed(2)
  if (a * a - num == 0) {
      return true
  }else {
      return false
  }
};
//Runtime: 52 ms, faster than 86.11% of JavaScript online submissions for Valid Perfect Square.