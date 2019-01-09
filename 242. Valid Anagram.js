var isAnagram = function(s, t) {
  let maps ={}
  let mapt ={}
  for (let a = 0;a < s.length;a++) {
      if (maps[s[a]] != undefined) {
          maps[s[a]]++
      } else {
          maps[s[a]] = 1
      }
  }
  for (let a = 0;a < t.length;a++) {
      if (mapt[t[a]] != undefined) {
          mapt[t[a]]++
      } else {
          mapt[t[a]] = 1
      }
  }

  for (let a in maps) {
      if (maps[a] != mapt[a]) {
          return false
      }
  }
  for (let a in mapt) {
      if (maps[a] != mapt[a]) {
          return false
      }
  }
  return true
};
//映射
//Runtime: 72 ms, faster than 64.60% of JavaScript online submissions for Valid Anagram.