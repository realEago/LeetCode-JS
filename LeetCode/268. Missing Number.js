var missingNumber = function(nums) {
  var b = new Array(nums.length+1)
  for (var a = 0;a < nums.length;a++) {
    b[nums[a]] = nums[a]
  }
  for (var a = 0;a < b.length;a++) {
    if(b[a] == undefined) {
      return a
    }
  }
};
//Runtime: 60 ms, faster than 100.00% of JavaScript online submissions for Missing Number.