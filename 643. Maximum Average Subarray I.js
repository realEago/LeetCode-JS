var findMaxAverage = function(nums, k) {
  //滑动窗口
  let max = -Infinity
  for (let a = 0;a <= nums.length - k;a++) {
      let sum = 0
      for (let b = a;b < a + k;b++) {
          sum += nums[b]
      }
      if (sum/k > max) {
          max = sum/k
      }
  }
  return max
};
//滑动窗口
//Runtime: 1320 ms, faster than 30.77% of JavaScript online submissions for Maximum Average Subarray I.