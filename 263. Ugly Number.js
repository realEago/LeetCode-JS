var isUgly = function(num) {
  if(num <= 0) {
      return false
  }
  while (num % 2 == 0) {
      num /= 2
  }
  while (num % 3 == 0) {
      num /= 3
  }
  while (num % 5 == 0) {
      num /= 5
  }
  if (num == 1) {
      return true
  } else {
      return false
  }
};
//Runtime: 68 ms, faster than 100.00% of JavaScript online submissions for Ugly Number.