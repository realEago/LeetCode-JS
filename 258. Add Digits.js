var addDigits = function(num) {
  var add = 0
  while (num > 0) {
      var a = num % 10
      add += a
      num = (num - a) / 10
  }
  if (add < 10) {
      return add
  } else {
      return addDigits(add)
  } 
};
//Runtime: 72 ms, faster than 100.00% of JavaScript online submissions for Add Digits.