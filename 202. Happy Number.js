var isHappy = function(n) {
  var sum = 0
  while (n > 0) {
      var digit = n % 10
      sum = sum + digit * digit
      n = (n - digit) / 10
  }
      if (sum == 1) {
          return true
      } else if (sum == 4) {
          return false
      } else {
          return isHappy(sum)
      }  
};
//所有不快乐数的数字平方和计算，最后都会进入 4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4 的循环中,因此只判断算出来的书是否等于4即可，如果等于4，则一定陷入死循环，为非快乐数
//Runtime: 60 ms, faster than 99.02% of JavaScript online submissions for Happy Number.