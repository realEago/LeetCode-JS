var toGoatLatin = function(S) {
  let vowel = 'aeiouAEIOU'
  let temp = S.split(' ')
  for (let a in temp) {
      if (vowel.includes(temp[a][0])) {
          temp[a] += 'ma'
      } else {
          temp[a] += temp[a][0]
          temp[a] = temp[a].slice(1)
          temp[a] += 'ma'
      }
      let i = +a + 1
      while (i > 0) {
          temp[a] += 'a'
          i--
      }
  }
  let result = ''
  for (let b of temp) {
      result += b + ' '
  } 
  result = result.trimRight()
  return result
};
//Runtime: 76 ms, faster than 17.97% of JavaScript online submissions for Goat Latin.
//Memory Usage: 16.3 MB, less than 3.51% of JavaScript online submissions for Goat Latin.