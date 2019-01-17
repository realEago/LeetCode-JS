var findComplement = function(num) {
  let a = num.toString(2)
  let temp = ''
  for (let i = 0;i < a.length;i++) {
      if (a[i] == '0') {
          temp += '1'
      } else {
          temp += '0'
      }
  }
  return parseInt(temp,2)
};
//Runtime: 72 ms, faster than 45.16% of JavaScript online submissions for Number Complement.