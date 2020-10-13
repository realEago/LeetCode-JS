var isLongPressedName = function(name, typed) {
  let n = 0
  let t = 0
  while (n < name.length || t < typed.length) {
      if (n < name.length && name[n] == typed[t]) {
          n++;t++
      }else if (name[n-1] == typed[t]) {
          t++
      }else {
          break;
      }
  }
  if (n == name.length && t == typed.length) {
      return true
  }else {
      return false
  }
};
//双指针
//Runtime: 68 ms, faster than 17.95% of JavaScript online submissions for Long Pressed Name.