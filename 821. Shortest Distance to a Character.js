var shortestToChar = function(S, C) {
  let temp = []
  let result = []
  for (let a in S) {
      if (S[a] == C) {
          temp.push(a)
      }
  }
  for (let a in S) {
      let min = Infinity
      temp.forEach((curr) => {
          if (Math.abs(a - curr) < min) {
              min = Math.abs(a - curr)
          }
          return min
      })
      result.push(min)
  }
  return result
};
//Runtime: 100 ms, faster than 4.65% of JavaScript online submissions for Shortest Distance to a Character.
//Memory Usage: 19.1 MB, less than 0.00% of JavaScript online submissions for Shortest Distance to a Character.