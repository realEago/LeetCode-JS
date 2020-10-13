/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  if (nums.length < 2) {
      return 0
  }
  nums.sort((a,b) => a - b)
  let max = 0
  for (let i = 0;i < nums.length - 1;i++) {
      if (nums[i + 1] - nums[i] > max) {
          max = nums[i + 1] - nums[i]
      }
  }
  return max
};

//Runtime: 88 ms, faster than 30.77% of JavaScript online submissions for Maximum Gap.
//Memory Usage: 16.5 MB, less than 66.67% of JavaScript online submissions for Maximum Gap.