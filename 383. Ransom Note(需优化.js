var canConstruct = function(ransomNote, magazine) {
  let map = {}
  let map1 = {}
  for (let a = 0;a < ransomNote.length;a++) {
      if (ransomNote[a] in map) {
          map[ransomNote[a]]++
      }else {
          map[ransomNote[a]] = 1
      }
  }
  for (let a = 0;a < magazine.length;a++) {
      if (magazine[a] in map1) {
          map1[magazine[a]]++
      }else {
          map1[magazine[a]] = 1
      }
  }
  for (let a in map) {
      if(map[a] > map1[a] || map1[a] == undefined) {
          return false
      }
  }
  return true
};
//Runtime: 100 ms, faster than 17.82% of JavaScript online submissions for Ransom Note.