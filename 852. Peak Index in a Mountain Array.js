var peakIndexInMountainArray = function(A) {
  for (let a = 1;a < A.length;a++) {
      if(A[a] > A[a-1] && A[a] > A[a+1]) {
          return a
      }
  }
};
//Runtime: 56 ms, faster than 75.59% of JavaScript online submissions for Peak Index in a Mountain Array.