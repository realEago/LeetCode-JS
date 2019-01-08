//Implement pow(x, n), which calculates x raised to the power n (xn).
var myPow = function(x, n) {
  let myPower = function(x,n) {
      if(n < 0) {
          let a = myPow(x, -n)
          return 1 / a
      }
      if(n == 0) {
          return 1
      } else if (n == 1) {
          return x
      } else if (n % 2 == 0) {
          let a = myPow(x,n >> 1)
          return a * a
      } else {
          let a = myPow(x,n >> 1)
          return a * a * x
      }
  }
 let a = myPower(x,n) 
 if ((a > (-2) ** 31)&&(a < 2**31 -1)) {
     return a
 } else {
     return 0
 }
};
//Runtime: 56 ms, faster than 100.00% of JavaScript online submissions for Pow(x, n).