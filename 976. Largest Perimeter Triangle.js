var largestPerimeter = function(A) {
  if (A.length < 3) {
      return 0
  }
  A.sort((a,b) => b - a)
  for (let i = 0;i < A.length - 2;i++) {
      if (A[i] < A[i+1] + A[i+2]) {
          return A[i] + A[i+1] + A[i+2]
      }   
  }
  return 0
};
//先排序，再判断
//Runtime: 120 ms, faster than 97.56% of JavaScript online submissions for Largest Perimeter Triangle.
//Memory Usage: 20 MB, less than 65.83% of JavaScript online submissions for Largest Perimeter Triangle.