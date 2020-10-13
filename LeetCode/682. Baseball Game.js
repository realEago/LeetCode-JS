//栈实现，如果是数字压入栈中，sum+上数字
//如果是符号则sum进行对应的操作，再进行栈操作
//时间复杂度 O(n) 空间复杂度 O(n)
var calPoints = function(ops) {
  let result = []
  let sum = 0
  for (let a = 0;a < ops.length;a++) {
      if (ops[a] == '+') {
          sum += (+result[0]) + (+result[1])
          result.unshift((+result[0]) + (+result[1]))
      } else if (ops[a] == 'D') {
          sum += (+result[0]) * 2
          result.unshift((+result[0]) * 2)
      } else if (ops[a] == 'C') {
          sum -= (+result[0])
          result.shift()
      } else {
          result.unshift(ops[a])
          sum += (+ops[a])
      }
  }
  return sum
};
//Runtime: 76 ms, faster than 34.29% of JavaScript online submissions for Baseball Game.