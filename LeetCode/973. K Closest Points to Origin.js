var kClosest = function(points, K) {
  let temp = []
  let result = []
  for (let i in points) {
      let a = points[i][0] * points[i][0] + points[i][1] * points[i][1]
      temp.push([a,i])
  }
  for (let i = temp.length - 1;i > 0;i--) {
      for (let j = 0;j < i;j++) {
          if (temp[j][0] > temp[j+1][0]) {
              let tem = temp[j]
              temp[j] = temp[j+1]
              temp[j+1] = tem
          }
      }
  }
  for (let a = 0;a < K;a++) {
      result.push(points[temp[a][1]])
  }
  return result
};
//Runtime: 2968 ms, faster than 0.00% of JavaScript online submissions for K Closest Points to Origin.