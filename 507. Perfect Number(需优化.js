var checkPerfectNumber = function(num) {
  var counter = 0
  for (var a = 1;a <= num/2;a++) {
      if (num % a == 0) {
          counter += a
      }
  }
  if(counter == num && num != 0) {
      return true
  } else {
      return false
  }
};
//Runtime: 2308 ms, faster than 30.00% of JavaScript online submissions for Perfect Number.