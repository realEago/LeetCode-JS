var sortColors = function(nums) {
  for (let i = nums.length - 1;i > 0 ;i--) {
      let swap = false
      for (let j = 0;j < i;j++) {
          if (nums[j] > nums[j+1]) {
              nums[j] = nums[j+1] + nums[j]
              nums[j + 1] = nums[j] - nums[j + 1]
              nums[j] = nums[j] - nums[j + 1]
              swap = true
          }
      }
      if (swap == false) {
          return nums
      }
  }
  return nums
};
//排序算法
//Runtime: 80 ms, faster than 11.11% of JavaScript online submissions for Sort Colors.
//Memory Usage: 15 MB, less than 16.67% of JavaScript online submissions for Sort Colors.
