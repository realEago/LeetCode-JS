var singleNumber = function(nums) {
  for(var a = 0;a < nums.length - 1;a++) {
      for(var b = a+1;b < nums.length;b++) {
          if (nums[a] == nums[b]) {
              nums.splice(b,1)
              nums.splice(a,1)
              a -= 1
              break;
          }
      }
  }
  return nums[0]
};
//Runtime: 172 ms, faster than 15.97% of JavaScript online submissions for Single Number.