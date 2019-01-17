var reverseWords = function(s) {
  let temp = s.split(' ')
  let result = ''
  for (let a in temp) {
      for (let b = temp[a].length - 1;b >= 0;b--) {
          result += temp[a][b]
      }
      result += ' '
  }
  return result.trimRight()
};
//Runtime: 104 ms, faster than 39.71% of JavaScript online submissions for Reverse Words in a String III.