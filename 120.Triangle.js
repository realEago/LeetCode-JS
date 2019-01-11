var minimumTotal = function(triangle) {
  var cache = {}
  return recusive(0,0)
  function recusive(x,y) {
      var key = x + ',' + y
      if (key in cache) {
          return cache[key]
      }
      if (x == triangle.length - 1) {
          return triangle[x][y]
      }
      return cache[key] = triangle[x][y] + Math.min(recusive(x+1, y), recusive(x+1, y+1)) 
  }
};

//Runtime: 72 ms, faster than 23.62% of JavaScript online submissions for Triangle.