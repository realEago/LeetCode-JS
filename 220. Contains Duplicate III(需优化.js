var containsNearbyAlmostDuplicate = function(nums, k, t) {
  for (let i = 0;i < nums.length - 1;i++) {
      for (let j = i + 1;j < nums.length;j++) {
          if (Math.abs(i-j) <= k && Math.abs(nums[i]-nums[j]) <= t) {
              return true
          }
      }
  }
  return false
};
//Runtime: 760 ms, faster than 31.82% of JavaScript online submissions for Contains Duplicate III.