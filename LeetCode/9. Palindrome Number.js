var isPalindrome = function(x) {
  let Palindrome = 0
  let y = x 
  while (y > 0) {
      let digit =  y % 10
      Palindrome = Palindrome * 10 + digit
      y = (y - digit)/10
  }
  if(Palindrome == x) {
      return true
  }else {
      return false
  }
};