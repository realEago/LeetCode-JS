var searchMatrix = function(matrix, target) {
  for (let a of matrix) {
      if (target >= a[0]) {
          for (let b of a) {
              if (target == b) {
                  return true
              }
          }
      }
  }
  return false
};
//Runtime: 1572 ms, faster than 5.06% of JavaScript online submissions for Search a 2D Matrix II.
//Memory Usage: 25 MB, less than 1.02% of JavaScript online submissions for Search a 2D Matrix II.