var reverseString = function(s) {
  let b = ''
  for (let a = s.length - 1;a >= 0;a--) {
      b += s[a]
  }
  return b
};
//Runtime: 72 ms, faster than 94.98% of JavaScript online submissions for Reverse String.