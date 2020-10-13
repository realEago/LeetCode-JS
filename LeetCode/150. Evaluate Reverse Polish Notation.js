var evalRPN = function(tokens) {
  let temp = []
  let fuhao = '+-*/'
  for (let a in tokens) {
      if (fuhao.includes(tokens[a])) {
          let tempp = parseInt(eval('(' + temp[temp.length - 2] + ')' + tokens[a] + '(' + temp[temp.length - 1] + ')'))
          temp.pop()
          temp.pop()
          temp.push(''+ tempp)
      } else {
          temp.push(tokens[a])
      }
  }
  return +temp[0]
};
//Runtime: 136 ms, faster than 0.00% of JavaScript online submissions for Evaluate Reverse Polish Notation.
//Memory Usage: 23.8 MB, less than 0.00% of JavaScript online submissions for Evaluate Reverse Polish Notation.