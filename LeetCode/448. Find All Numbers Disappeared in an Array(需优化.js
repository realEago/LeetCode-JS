var findDisappearedNumbers = function(nums) {
  let map = {}
  for (let a = 0;a < nums.length;a++) { //先把数组里的数字与出现的次数进行映射，拿到出现过的数字
      if (nums[a] in map) {
          map[nums[a]]++
      } else {
          map[nums[a]] = 1
      }
  }
  let b = new Array(nums.length+1) //声明一个数组长度+1的数组，因为要加上0
  b[0] = 'shit'
  for (let c in map) { //把对象中出现过的数字放进相同下标的数组中，下标即存放的数字
      b[c] = c
  }
  let d = []
  for (let e = 0;e < b.length;e++) { //找出那些没有存放数字的位置
      if(b[e] === undefined) {
          d.push(e)
      }
  }
  return d
};
//Runtime: 148 ms, faster than 42.92% of JavaScript online submissions for Find All Numbers Disappeared in an Array.