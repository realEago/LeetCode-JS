var maxSlidingWindow = function(nums, k) {
  if (!nums.length) {
      return []
  }
  var win = new Array(k)
  for (let a = k - 1;a >= 0; a--) {
      win[a] = nums[a]
  }
  let result = []
  for (let a = k ;a <= nums.length;a++) {
      result.push(Math.max(...win))
      win.push(nums[a])
      win.shift()
  }
  return result
};
//需优化 用堆来做题
//做一个滑动数组窗口
//Runtime: 164 ms, faster than 27.78% of JavaScript online submissions for Sliding Window Maximum.