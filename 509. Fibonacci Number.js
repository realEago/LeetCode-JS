/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N == 0) {
      return 0
  }
  if (N == 1) {
      return 1
  }
  return fib(N - 1) + fib(N - 2)
};
//递归实现斐波那切数列需优化 128m

var fib = function(N) {
  let a = [0,1]
  let n
  for(let b = 2;b <= N;b++) {
      n = a[b - 1] + a[b - 2]
      a[b] = n
  }
  return a[N]
};
// 68m