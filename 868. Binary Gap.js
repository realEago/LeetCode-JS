var binaryGap = function(N) {
  let binary = N.toString(2)
  let max = 0
  let temp = 0
  let first = true
  for (let i in binary) {
      if (binary[i] == '1' && first == true) {
          first = false
          temp = i
      } 
      if (binary[i] == '1' && first == false) {
          if (i - temp > max) {
              max = i - temp
          }
          temp = i
      }
  }
  return max
};
//Runtime: 96 ms, faster than 8.33% of JavaScript online submissions for Binary Gap.
//Memory Usage: 15.4 MB, less than 3.85% of JavaScript online submissions for Binary Gap.