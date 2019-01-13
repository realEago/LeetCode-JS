var divide = function(dividend, divisor) {
  let result = 0
  if(dividend == 0) {
      result = 0
  } else if(divisor == 1) {
      result = dividend
  } else if(divisor == -1) {
      result = -dividend
  } else if(dividend == divisor) {
      result = 1
  } else {
      let dd = Math.abs(dividend)
      let dr = Math.abs(divisor)
      while (dd >= dr) {
          dd -= dr
          result++
      }
      if ((dividend > 0 && divisor > 0)||(dividend < 0 && divisor < 0)) {
          return result
      } else {
          return -result
      }
  }
  if (result > 2147483647) {
      return  2147483647
  }
  if (result < -2147483648) {
      return  -2147483648
  }
  return result
};
//Runtime: 4412 ms, faster than 24.44% of JavaScript online submissions for Divide Two Integers.