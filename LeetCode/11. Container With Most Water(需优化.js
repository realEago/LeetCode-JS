var maxArea = function(height) {
  let big = 0
  let vol
  for (var a = 0;a < height.length-1;a++) {
      for(var b = a+1;b < height.length;b++) {
          if(height[b] > height[a]) {
            vol = height[a] * (b - a)
              
          }
          else {
            vol = height[b] * (b - a)
          }
          if(vol > big) {
            big = vol
          }
      }
  }
  return big
};
//Runtime: 876 ms, faster than 22.33% of JavaScript online submissions for Container With Most Water.