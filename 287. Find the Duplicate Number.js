var findDuplicate = function(nums) {
  let map = {}
  for (let a of nums) {
      if (map[a] == undefined) {
          map[a] = 1
      } else {
          map[a]++
      }
  }
  for (let a in map) {
      if (map[a] >= 2) {
          return a
      }
  }
};
//Runtime: 84 ms, faster than 27.40% of JavaScript online submissions for Find the Duplicate Number.
//需优化到空间复杂度为 O（1） 