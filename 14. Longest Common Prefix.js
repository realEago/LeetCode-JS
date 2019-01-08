var longestCommonPrefix = function(strs) {
  let prefix = ''
  if((strs.length == 0)||(strs[0] == '')) {
      return prefix
  }
  for (let b = 0;;b++) {
      prefix += strs[0][b]
      for (let a = 0;a < strs.length;a++) {
          if ((strs[a].indexOf(prefix) == -1)||(strs[a].indexOf(undefined) != -1)||(strs[a].indexOf(prefix) != 0)) {
              prefix = prefix.slice(0,b)
              return prefix
          }
      }
  }
  return prefix
};
//Runtime: 60 ms, faster than 52.83% of JavaScript online submissions for Longest Common Prefix.