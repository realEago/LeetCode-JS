var containsDuplicate = function(nums) {
  for(var a = 0;a < nums.length - 1;a++) {
      for(var b = a+1;b < nums.length;b++) {
          if (nums[a] == nums[b]) {
              return true
          }
      }
  }
  return false
};
//Runtime: 972 ms, faster than 17.72% of JavaScript online submissions for Contains Duplicate.