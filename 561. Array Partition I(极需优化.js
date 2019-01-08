var arrayPairSum = function(nums) {
  var B = new Array()
  var sum = 0
  for (var i = nums.length;i > 1;i--) {
    for (var j = 0;j < i - 1;j++) {
      if(nums[j] > nums[j+1]) {
          nums[j]=nums[j]+nums[j+1]
          nums[j+1]=nums[j]-nums[j+1]
          nums[j]=nums[j]-nums[j+1]
      }
    }  
  }
  for(var a = 0;a < nums.length;a += 2) {
      sum += nums[a]
  }
  return sum
};
//Runtime: 6472 ms, faster than 0.98% of JavaScript online submissions for Array Partition I.