var simplifyPath = function(path) {
  path = path.split('/')
  let temp = []
  let result = '/'
  for (let a of path) {
      if (a != '' && a != '.') {
          temp.push(a)
      }
  }
  for (let a in temp) {
      if (temp[a] == '..') {
          temp[a] = ''
          for (let i = a - 1;i >= 0;i--) {
              if (temp[i] != '') {
                  temp[i] = ''
                  break;
              }
          }            
      }
  }
  for (let a of temp) {
      if (a != '') {
          result += a + '/'
      }
  }
  return result.length > 1?result.slice(0,result.length - 1):result
};
//Runtime: 92 ms, faster than 7.69% of JavaScript online submissions for Simplify Path.
//Memory Usage: 18 MB, less than 0.00% of JavaScript online submissions for Simplify Path.
