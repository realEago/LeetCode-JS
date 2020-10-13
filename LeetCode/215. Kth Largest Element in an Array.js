var findKthLargest = function(nums, k) {
  for (let a = nums.length;a > 0;a--) {
      let swap = false
      for (let b = 0;b < a - 1;b++) {
          if (nums[b] < nums[b+1]) {
             nums[b] = nums[b] + nums[b+1]
             nums[b+1] = nums[b] - nums[b+1]
              nums[b] = nums[b] - nums[b+1]
              swap = true
          }
      }
      if (swap == false) {
          break;
      }
  }
  return nums[k - 1]
};
//冒泡排序
//Runtime: 316 ms, faster than 1.45% of JavaScript online submissions for Kth Largest Element in an Array.