//使用栈的数据结构
//让闭合括号的映射和已经储存到栈中的栈顶比较，相同则抵消，不同则返回false
//时间复杂度 O(n) 空间复杂度O(n)
var isValid = function(s) {
  let stac = []
  let map = {
      ')':'(',
      ']':'[',
      '}':'{'
  }
  for (let a = 0;a < s.length;a++) {
      if (map[s[a]] != undefined) {
          if (map[s[a]] == stac[0]) {
              stac.shift()
          } else {
              return false
          }
      } else {
          stac.unshift(s[a])
      }
  }
  return stac.length == 0
};
//28%