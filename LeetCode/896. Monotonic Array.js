var isMonotonic = function(A) {
  if (A[0] <= A[A.length - 1]) {
      for (let a = 0;a < A.length - 1;a++) {
          if(A[a] > A[a+1]) {
              return false
          }
      }
  } 
  if (A[0] >= A[A.length - 1]){
      for (let a = 0;a < A.length - 1;a++) {
          if(A[a] < A[a+1]) {
              return false
          }
      }
  }
  return true
};
//Runtime: 76 ms, faster than 100.00% of JavaScript online submissions for Monotonic Array.