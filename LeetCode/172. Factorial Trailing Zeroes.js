//计算包含的2和5组成的pair的个数就可以了，一开始想错了，还算了包含的10的个数。
//因为5的个数比2少，所以2和5组成的pair的个数由5的个数决定。
//观察15! = 有3个5(来自其中的5, 10, 15)， 所以计算n/5就可以。
//但是25! = 有6个5(有5个5来自其中的5, 10, 15, 20, 25， 另外还有1个5来自25=(5*5)的另外一个5）
//所以除了计算n/5， 还要计算n/5/5, n/5/5/5, n/5/5/5/5, ..., n/5/5/5,,,/5直到商为0。
var trailingZeroes = function(n) {
  let sum = 1
  let result = 0
  while(n > 0) {
      result += n / 5 | 0
      n = n / 5
  }
  return result
};
//Runtime: 84 ms, faster than 0.00% of JavaScript online submissions for Factorial Trailing Zeroes. 

// var trailingZeroes = function(n) {
//     let sum = 1
//     let result = 0
//     while(n > 0) {
//         let nn = n
//         while(nn % 5 == 0) {
//             nn /= 5
//             result++
//         }
//         n--
//     }
//     return result
// };
//Runtime: 10348 ms, faster than 0.00% of JavaScript online submissions for Factorial Trailing Zeroes.