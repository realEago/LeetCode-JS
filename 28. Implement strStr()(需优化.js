var strStr = function(haystack, needle) {
  let b = needle.length
  for (let a = 0;a < haystack.length - b + 1;a++) {
      if(haystack.slice(a,a+b) == needle) {
          return a
      }
  }
  return -1
};
//Runtime: 76 ms, faster than 17.20% of JavaScript online submissions for Implement strStr().