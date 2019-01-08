var selfDividingNumbers = function(left, right) {
  let self = []
  for(let a = left;a <= right;a++) {
      if (isSelfDividingNumbers(a) == true) {
          self.push(a)
      }
  }
  return self;
};

function isSelfDividingNumbers(n) {
  let num = n
  while (n > 0) {
      let b = n % 10
      if (num % b == 0) {
          n = (n - b) / 10
          continue;
      } else {
          return false;
      }
  }
  return true
}
//Runtime: 80 ms, faster than 21.26% of JavaScript online submissions for Self Dividing Numbers.