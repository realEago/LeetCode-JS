var searchInsert = function(nums, target) {
  for(var a = 0;a < nums.length;a++) {
      if(nums[a] == target) {
          return a
      }
      if(nums[a] > target) {
          return a
      }
  }
  return a
};
//Runtime: 84 ms, faster than 3.85% of JavaScript online submissions for Search Insert Position.