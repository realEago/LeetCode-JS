var imageSmoother = function(M) {
  let x = new Array(M.length)
  for (let a = 0;a < M.length;a++) { //声明返回二维数组
      x[a] = []
  }
  let y = new Array(9)               //计算元素周围八个数及其本身的平均值
  for (let a = 0;a < M.length;a++) {
      for (let b = 0;b < M[0].length;b++) {
          if (M[a-1] != undefined) { //若该元素前边没有数组，说明第一排元素全为0，也就是undefined
              y[0] = M[a-1][b-1]
              y[1] = M[a-1][b]
              y[2] = M[a-1][b+1]
          } else {
              y[0] = y[1] = y[2] = undefined
          }
          y[3] = M[a][b-1]
          y[4] = M[a][b]
          y[5] = M[a][b+1]
          if (M[a+1] != undefined) {
              y[6] = M[a+1][b-1]
              y[7] = M[a+1][b]
              y[8] = M[a+1][b+1] 
          } else {
              y[6] = y[7] = y[8] = undefined
          }
          let num = 0  //周围数之和
          let chushu = 0 //计算周围有几个数
          for (let c = 0;c <= 8;c++) {
              if (y[c] != undefined) {
                  num += y[c]
                  chushu++
              }
          }
          x[a][b] = Math.floor(num/chushu)
      }
  }
  return x
};
//Runtime: 220 ms, faster than 22.77% of JavaScript online submissions for Image Smoother.