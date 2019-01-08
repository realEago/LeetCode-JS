var twoSum = function(nums, target) {
  var A = new Array()
  for(var a = 0;a < nums.length - 1;a++) {
    for(var b = a+1;b< nums.length ;b++) {
      if(nums[a] + nums[b] == target) {
        A.push(a,b)
        return A
      }
    }
  }
};
//Runtime: 120 ms, faster than 47.22% of JavaScript online submissions for Two Sum.