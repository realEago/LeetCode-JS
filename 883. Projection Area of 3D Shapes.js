var projectionArea = function(grid) {
  var xy = 0,zx = 0,yz = 0
  for (let a of grid) {
      for (let b of a) {
          if (b != 0) {
              xy++
          }
      }
      zx += Math.max(...a)
  }
  for (let i = 0;i < grid[0].length;i++) {
      let temp = []
      for (let j = 0; j < grid.length;j++) {
          temp.push(grid[j][i])
      }
      yz += Math.max(...temp)
  }
  console.log(yz)
  return xy + zx + yz
};
//Runtime: 80 ms, faster than 59.26% of JavaScript online submissions for Projection Area of 3D Shapes.