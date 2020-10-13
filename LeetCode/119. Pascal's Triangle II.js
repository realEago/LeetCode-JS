var getRow = function(rowIndex) {
  let a = []
  for (let b = 0;b < rowIndex + 1;b++) {
      a[b] = []
      a[b][0] = 1
      a[b][b] = 1
      if(b > 1) {
          for (let c = 1;c < b;c++) {
              a[b][c] = a[b-1][c-1]+a[b-1][c]
          }
      }
  }
  return a[rowIndex]
};
//需优化时间复杂度为n
//Runtime: 72 ms, faster than 56.52% of JavaScript online submissions for Pascal's Triangle II.