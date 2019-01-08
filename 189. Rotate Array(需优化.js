var rotate = function(nums, k) {
  var c = nums[0]
  var d
  for (var a = 0;a < k;a++) {
    for(var b = 0;b < nums.length;b++) {
      if( b == 0) {
        c = nums[b]
        nums[b] = nums[nums.length-1]
      }else {
        d = nums[b]
        nums[b] = c
        c = d
      }
    }
  }   
  return nums
};
//Runtime: 348 ms, faster than 2.46% of JavaScript online submissions for Rotate Array.