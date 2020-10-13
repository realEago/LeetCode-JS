var searchMatrix = function(matrix, target) {
  for (let a of matrix) {
      if (target <= a[a.length - 1]) {
          for (let b of a) {
              if (target == b) {
                  return true
              }
          }
          return false
      }
  }
  return false
};
//Runtime: 72 ms, faster than 37.62% of JavaScript online submissions for Search a 2D Matrix.
//Memory Usage: 16.3 MB, less than 0.79% of JavaScript online submissions for Search a 2D Matrix.