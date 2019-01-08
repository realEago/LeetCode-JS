var removeElement = function(nums, val) {
  for (let a = 0;a < nums .length;a++) {
      if(nums[a] == val) {
          nums.splice(a,1)
          a--
      }
  }
  return nums.length
};
//Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for Remove Element.