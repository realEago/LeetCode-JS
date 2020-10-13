var isPalindrome = function(s) {
  let ss = ''
  for (let a = 0;a < s.length;a++) {
      let num = s.charCodeAt(a) 
      if((num >= 65 && num <= 90) || (num >= 97 && num <= 122)|| (num >= 48 && num <= 57)) {
          ss += s[a]
      } 
  } 
  ss = ss.toLowerCase()
  console.log(ss)
  for (let a = 0;a < (ss.length / 2 | 0);a++) {
      if (ss[a] != ss[ss.length - a - 1]) {
          return false
      }
  }
  return true
};
//Runtime: 100 ms, faster than 13.68% of JavaScript online submissions for Valid Palindrome.