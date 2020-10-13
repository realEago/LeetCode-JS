
var findErrorNums = function(nums) {
  let map = {}
  let result = []
  for (let a = 0;a < nums.length;a++) {
      if (nums[a] in map) {
          result.push(nums[a])
      } else {
          map[nums[a]] = true
      }
  }
  let n = 1
  while(n in map) {
      n++
  }
  result.push(n)
  return result
};
//Runtime: 88 ms, faster than 58.06% of JavaScript online submissions for Set Mismatch.