var validPalindrome = function(s) {
  let begin = 0
  let end = s.length - 1
  let counter = 1
  while (end > begin) {
      if (s[begin] != s[end]) {
          return isPalindrome(s,begin + 1,end)||isPalindrome(s,begin,end - 1)
      } else {
          begin++
          end--
      } 
  }
  return true
};
var isPalindrome = function(s,begin,end) {
  while(end > begin) {
      if (s[begin] != s[end]) {
          return false
      } else {
          begin++
          end--
      }
  }
  return true
}
//遇到不相等的字母时，如果左（右）边隔一位后是回文序列则说明满足题意
//否则返回false
//Runtime: 116 ms, faster than 55.88% of JavaScript online submissions for Valid Palindrome II.
//Memory Usage: 28.5 MB, less than 75.00% of JavaScript online submissions for Valid Palindrome II.