var search = function(nums, target) {
  if (nums[0] == target) {
      return 0
  }
  let left = 0
  let right = nums.length - 1
  let center = (left + right) / 2 | 0
  while (center != left) {
      if (nums[center] > target) {
          right = center
          center = (left + right) / 2 | 0 
      } else if (nums[center] < target) {
          left = center
          center = (left + right) / 2 | 0 
      } else if (nums[center] == target) {
          return center
      } 
  }
  if (nums[left] == target) {
          return left
  } else if (nums[right] == target) {
          return right
  }
  return -1
};
//Runtime: 80 ms, faster than 39.42% of JavaScript online submissions for Binary Search.