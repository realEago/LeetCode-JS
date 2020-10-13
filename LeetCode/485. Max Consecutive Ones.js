var findMaxConsecutiveOnes = function(nums) {
  var num = 0
  var max = 0
  for (var a = 0;a < nums.length;a++) {
    if (nums[a] == 0) {
      num = 0 
    }  else {
      num ++
    }
    if(num > max) {
      max = num
    }
  }
  return max
};
//Runtime: 68 ms, faster than 85.04% of JavaScript online submissions for Max Consecutive Ones.                         