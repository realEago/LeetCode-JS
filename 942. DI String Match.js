var diStringMatch = function(S) {
  let max = S.length
  let min = 0
  let result = []
  for (let i of S) {
      if ( i == 'I') {
          result.push(min)
          min++
      } else {
          result.push(max)
          max--
      }
  }
  result.push(max)
  return result
};
//看题找规律，遇到 I 就把最小的传进去，遇到 D就把最大的传进去
//Runtime: 108 ms, faster than 39.26% of JavaScript online submissions for DI String Match.