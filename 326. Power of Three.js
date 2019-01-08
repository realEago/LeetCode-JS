var isPowerOfThree = function(n) {
  if (n <= 0) return false
  if(3**19 % n == 0){
      return true
  } else {
      return false
  }
};
//3的19次方 小于 2的31次方减一
//Runtime: 320 ms, faster than 76.25% of JavaScript online submissions for Power of Three.