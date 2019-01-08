var removeDuplicates = function(nums) {
  for (let a = 0;a < nums.length - 1;a++) {
      for (let b = a+1;b < nums.length;b++) {
          if (nums[a] == nums[b]) {
              nums.splice(b,1)
              b--
          }
      }
  }
  return  nums.length        
};
//Runtime: 640 ms, faster than 1.94% of JavaScript online submissions for Remove Duplicates from Sorted Array.