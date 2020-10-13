var customSortString = function(S, T) {
  let temp = new Array(S.length + 1)
  temp.fill('')
  let Ssplit = S.split('')
  let result = ''
  for (let a = 0;a < T.length;a++) {
      if (S.includes(T[a])) {
          temp[Ssplit.indexOf(T[a])] += T[a]
      } else {
          temp[temp.length - 1] += T[a]
      }
  }
  for (let a of temp) {
      if (a != '') {
          result += a
      }
  }
  return result
};
//Runtime: 68 ms, faster than 31.82% of JavaScript online submissions for Custom Sort String.
//Memory Usage: 14.7 MB, less than 38.71% of JavaScript online submissions for Custom Sort String.