var majorityElement = function(nums) {
  let temp = {}
  for (let a of nums) {
      if (temp[a] == undefined) {
          temp[a] = 1
      } else {
          temp[a]++
      }
  }
  let result = []
  for (let a in temp) {
      if (temp[a] > nums.length / 3) {
          result.push(+a)
      }
  }
  return result
};
//Runtime: 80 ms, faster than 83.33% of JavaScript online submissions for Majority Element II.
//Memory Usage: 18.7 MB, less than 0.00% of JavaScript online submissions for Majority Element II.
