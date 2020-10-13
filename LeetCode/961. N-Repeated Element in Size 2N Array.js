var repeatedNTimes = function(A) {
  for (let a = 0;a < A.length - 1;a++) {
      for (let b = a + 1;b < A.length;b++) {
          if(A[a] == A[b]) {
              return A[b]
          }
      }
  }
};
//Runtime: 60 ms, faster than 100.00% of JavaScript online submissions for N-Repeated Element in Size 2N Array.