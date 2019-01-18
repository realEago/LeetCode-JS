//把字符串以空格切开，遍历数组，如果不是空格或者空，计数器++
var countSegments = function(s) {
  let result = 0
  let temp = s.split(' ')
  for (let a of temp) {
      if ((a != ' ') && (a != '')) {
          result++
      }
  }
  return result
};
//Runtime: 68 ms, faster than 40.00% of JavaScript online submissions for Number of Segments in a String.