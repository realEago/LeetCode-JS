var findUnsortedSubarray = function(nums) {
  let temp = nums.slice() //数组拷贝
  temp.sort((a,b) => (a - b))
  let i = 0,j = temp.length - 1
  let flag = 1
  while (i < j) {
      let flag = 1
      if (temp[i] == nums[i]) {
          i++
          flag = 0
      }
      if (temp[j] == nums[j]) {
          j--
          flag = 0
      }
      if (flag == 1) {
          return j - i + 1
      }
  }
  return 0
};
//Runtime: 136 ms, faster than 21.46% of JavaScript online submissions for Shortest Unsorted Continuous Subarray.
//Memory Usage: 20.1 MB, less than 17.24% of JavaScript online submissions for Shortest Unsorted Continuous Subarray.