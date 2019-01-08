var singleNonDuplicate = function(nums) {
  let map = {}
  for (let a = 0;a < nums.length;a++) {
      if (nums[a] in map) {
          map[nums[a]]++
      } else {
          map[nums[a]] = 1
      }
  }
  for (let a in map) {
      if (map[a] == 1) {
          return a
      }
  }
};
//Runtime: 56 ms, faster than 44.53% of JavaScript online submissions for Single Element in a Sorted Array.