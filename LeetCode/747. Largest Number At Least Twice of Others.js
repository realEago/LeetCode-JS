var dominantIndex = function(nums) {
  if (nums.length <= 1) {
      return 0
  }
  let big = -Infinity
  let bigger = -Infinity
  let i
  let j
  for (let a = 0;a < nums.length;a++) {
      if (nums[a] > bigger) {
          bigger = nums[a]
          i = a
      }
  }
  nums[i] = - Infinity
  for (let a = 0;a < nums.length;a++) {
      if (nums[a] > big) {
          big = nums[a]
          j = a
      }
  }
  nums[i] = bigger
  if (nums[i] >= nums[j]*2) {
      return i
  } else {
      return -1
  }
};
//Runtime: 72 ms, faster than 30.77% of JavaScript online submissions for Largest Number At Least Twice of Others.