var generate = function(numRows) {
  let a = []
  for (let b = 0;b < numRows;b++) {
      a[b] = []
      a[b][0] = 1
      a[b][b] = 1
      if(b > 1) {
          for (let c = 1;c < b;c++) {
              a[b][c] = a[b-1][c-1]+a[b-1][c]
          }
      }
  }
  return a
};
