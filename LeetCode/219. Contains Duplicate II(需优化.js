var containsNearbyDuplicate = function(nums, k) {
  for (let i = 0;i < nums.length - 1;i++) {
      for (let j = i + 1;j < nums.length;j++) {
          if (nums[i] == nums[j]) {
              if (Math.abs(i-j) <= k) {
                  return true
              }
          }
      }
  }
  return false
};
//Runtime: 1384 ms, faster than 18.26% of JavaScript online submissions for Contains Duplicate II.