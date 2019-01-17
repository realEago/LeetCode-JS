var isToeplitzMatrix = function(matrix) {
  for (let a = 1;a < matrix.length;a++) {
      for (let b = 0;b < matrix[a].length;b++) {
          if (b - 1 < 0) {
              continue
          } else if (matrix[a][b] != matrix[a-1][b-1]) {
              return false
          }
      }
  }
  return true
};
//Runtime: 88 ms, faster than 17.50% of JavaScript online submissions for Toeplitz Matrix.