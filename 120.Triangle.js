var minimumTotal = function(triangle,cache = {},x = 0,y = 0) {
  var key = x + ',' + y
    if (key in cache) {
      return cache[key]
    }
    if (x == triangle.length - 1) {
      return triangle[x][y]
    }
    return cache[key] = triangle[x][y] + Math.min(minimumTotal(triangle,cache,x+1, y), minimumTotal(triangle,cache,x+1, y+1)) 
  };

//Runtime: 72 ms, faster than 23.62% of JavaScript online submissions for Triangle.