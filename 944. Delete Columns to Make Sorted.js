var minDeletionSize = function(A) {
  let count = 0;
  for (let c = 0; c < A[0].length; c++) {
      for (let i = 0; i < A.length - 1; i++) {
          if (A[i].charCodeAt(c) > A[i + 1].charCodeAt(c)) {
              count++;
              break;
          }
      }
  }
  return count;
};
//垃圾题，题目都说不清楚
//Runtime: 92 ms, faster than 36.36% of JavaScript online submissions for Delete Columns to Make Sorted.