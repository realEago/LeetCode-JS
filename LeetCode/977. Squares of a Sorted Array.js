//时间复杂度 O(n^2)
var sortedSquares = function(A) {
  var temp = A.map(item => item * item)
  for (let i = temp.length;i > 0;i--) {
      for (let j = 0;j < i;j++) {
          if (temp[j] > temp[j+1]) {
              temp[j] = temp[j] + temp[j+1]
              temp[j+1] = temp[j] - temp[j+1]
              temp[j] = temp[j] - temp[j+1]
          }
      }
  }
  return temp
};
//Runtime: 2372 ms, faster than 1.09% of JavaScript online submissions for Squares of a Sorted Array.