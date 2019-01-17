var reverseStr = function(s, k) {
  let result = ''
  for (let a = 0;a < s.length;a += 2 * k) {
      if (s.length - a >= 2 * k) {
          for (let b = k + a - 1;b >= a;b--) {
              result += s[b]
          } 
          for (let b = k + a;b < 2 * k + a;b++) {
              result += s[b]
          }
      }else if (s.length - a >= k && s.length - a <= 2 * k ) {
          for (let c = k + a - 1;c >= a;c--) {
              result += s[c]
          }
          for (let c = k + a;c < s.length;c++) {
              result += s[c]
          }
          return result
      }else {
          for (let c = s.length - 1;c >= a;c--) {
              result += s[c]
          }
          return result
      }
  }
  return result
};
//Runtime: 80 ms, faster than 57.89% of JavaScript online submissions for Reverse String II.