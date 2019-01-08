var moveZeroes = function(nums) {
  let b = 0
  for(let a = 0;a < nums.length; a++) {
      if(nums[a] == 0) {
          nums.splice(a,1)
          a -= 1
          b += 1
      }
  }
  for(let a = 0;a < b;a++) {
      nums.push(0)
  }
};
//Runtime: 64 ms, faster than 74.05% of JavaScript online submissions for Move Zeroes.