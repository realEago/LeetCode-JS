//映射
var findTheDifference = function(s, t) {
  let maps = {}
  let mapt = {}
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
  for (let a in mapt) {
      if (maps[a] == undefined || maps[a] < mapt[a]) {
          return a
      }
  }
};
//Runtime: 60 ms, faster than 76.26% of JavaScript online submissions for Find the Difference.