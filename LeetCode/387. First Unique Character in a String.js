//Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
var firstUniqChar = function(s) {
  let map = {}
  for (let i = 0;i < s.length;i++) {
      let a = s[i]
      if (a in map) {
          map[a] ++
      } else {
          map[a] = 1
      }
  }
  for (let i = 0;i < s.length;i++) {
      let a = s[i]
      if (map[a] == 1) {
          return i
      }
  }
  return -1
};
//Runtime: 92 ms, faster than 78.69% of JavaScript online submissions for First Unique Character in a String.