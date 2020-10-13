var mySqrt = function(x) {
  let a = x
  while( a * a - x > 0.1) {
      a = 0.5 * a + 0.5 * (x / a)
  }
  return Math.floor(a)
};
//Runtime: 72 ms, faster than 80.35% of JavaScript online submissions for Sqrt(x).