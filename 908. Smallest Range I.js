var smallestRangeI = function(A, K) {
  let max = Math.max(...A) - K
  let min = Math.min(...A) + K
  let result = max - min
  return result > 0 ? result : 0
};
//Runtime: 72 ms, faster than 100.00% of JavaScript online submissions for Smallest Range I.
//Memory Usage: 16.5 MB, less than 100.00% of JavaScript online submissions for Smallest Range I.