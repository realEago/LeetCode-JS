var rotateString = function(A, B) {
  for (let a = 0;a <= A.length;a++) {
      if (A === B) {
          return true
      }
      A = A + A[0]
      A = A.slice(1)
  }
  return false
};
//Runtime: 68 ms, faster than 100.00% of JavaScript online submissions for Rotate String.