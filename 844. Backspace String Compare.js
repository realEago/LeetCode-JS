var backspaceCompare = function(S, T) {
  let s = ''
  for (let a = 0;a < S.length;a++) {
      if (S[a] == '#') {
          s = s.slice(1)
      } else {
          s = S[a] + s
      }
  }
  let t = ''
  for (let a = 0;a < T.length;a++) {
      if (T[a] == '#') {
          t = t.slice(1)
      } else {
          t = T[a] + t
      }
  }
  return s === t
};
//Runtime: 76 ms, faster than 15.85% of JavaScript online submissions for Backspace String Compare.