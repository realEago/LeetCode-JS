var countPrimes = function(n) {
  let num = 0
  for(let a = 1;a < n;a++) {
      if(isprimes(a)) {
          num ++
      }
  }
  return num
};
function isprimes(n) {
  if (n == 1) {
      return false
  }
  for (var a = 2;a <= Math.sqrt(n);a++) {
      if (n % a == 0) {
          return false
      }
  }
  return true
}
//Runtime: 828 ms, faster than 24.56% of JavaScript online submissions for Count Primes.