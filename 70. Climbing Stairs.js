//还有 时间复杂度 O(logN)的解法，待补充

//再精简可以只记录 n-1 项和 n-2 项的值
//时间复杂度的 O(N)，空间复杂度 O(1)
var climbStairs = function(n) { 
  if (n <= 2) return n
  let a = 1
  let b = 2
  let temp
  for (let c = 2;c < n;c++) {
      temp = a + b
      a = b
      b = temp
  }
  return temp
};

//由题意可知第n台阶的走法 = 第n-1台阶的走法 + 第n-2台阶的走法
//即f(n) = f(n-1) + f(n-2) 突然发现跟斐波那切数列的递推公式相同
//递归记忆法 时间复杂度的 O(N)，空间复杂度 O(N)
// var climbStairs = function(n) { 
//     let a = [0,1]
//     for (let b = 2;b <= n + 1;b++) {
//         let c = a[b - 1] + a[b - 2]
//         a[b] = c
//     }
//     return a[n + 1]
// };

//递归方法超时 算法复杂度为O(2^N)
// var climbStairs = function(n) { 
//     var count = 0
//     function find(num) {
//        if (num == n) { 
//           count++
//           }
//           else if (num > n) {
//             //void 无效 什么也不做
//           } else {
//             find(num + 1)
//             find(num + 2)
//           }
//      }
//     find(0)
//     return count
// };
