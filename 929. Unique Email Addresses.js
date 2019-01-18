var numUniqueEmails = function(emails) {
  let map = {}    
  let result = 0
  for (let i of emails) {
      let temp = ''
      let plus = false
      let at = false
      for (let j = 0;j < i.length;j++) {
          if (i[j] == '@') {
              plus = false
              at = true
          }
          if (i[j] == '+') {
              plus = true
          }
          if (plus == false) {
              if (i[j] == '.' && at == false) {
                  continue
              } else {
                  temp += i[j]
              }
          }
      }
      if (!(temp in map)) {
          map[temp] = 0
      }
      temp = ''
  }
  for (let b in map) {
      result++
      console.log(b)
  }
  return result
};
//Runtime: 140 ms, faster than 9.44% of JavaScript online submissions for Unique Email Addresses.