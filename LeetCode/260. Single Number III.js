var singleNumber = function(nums) {
  let map ={}
  let b = []
  for (let a = 0;a < nums.length;a++) {
      if (nums[a] in map) {
          map[nums[a]]++
      } else {
          map[nums[a]] = 1
      }
  }
  for (let a in map) {
      if(map[a] == 1) {
          b.push(a)
      }
  }
  return b
};
//Runtime: 68 ms, faster than 86.00% of JavaScript online submissions for Single Number III.