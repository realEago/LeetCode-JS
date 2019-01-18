var judgeCircle = function(moves) {
  let result = [0,0]
  for (let i of moves) {
      if (i == 'R') {
          result[0]++
      } else if (i == 'L') {
          result[0]--
      } else if (i == 'U') {
          result[1]++
      } else {
          result[1]--
      }
  }
  if (result[0] == 0 && result[1] == 0) {
      return true
  } else {
      return false
  }
};
//Runtime: 84 ms, faster than 31.10% of JavaScript online submissions for Robot Return to Origin.