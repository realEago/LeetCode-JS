var majorityElement = function(nums) {
  let map = {}
  for (let a = 0;a < nums.length;a++) {
      if (nums[a] in map) {
         map[nums[a]]++ 
      } else {
         map[nums[a]] = 1
      }
  }
  for (let a in map) {
      if(map[a] > nums.length/2) {
          return a
      }
  }
};
//Runtime: 60 ms, faster than 97.74% of JavaScript online submissions for Majority Element.