var singleNumber = function(nums) {
  let map ={}
  for (let a = 0;a < nums.length;a++) {
      if (nums[a] in map) {
          map[nums[a]]++
      } else {
          map[nums[a]] = 1
      }
  }
  for (let a in map) {
      if(map[a] == 1) {
          return a
      }
  }
};
//Runtime: 92 ms, faster than 28.77% of JavaScript online submissions for Single Number II.