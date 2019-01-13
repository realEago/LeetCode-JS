var intersect = function(nums1, nums2) {
  let map1 = {}
  let map2 = {}
  let result = []
  for (let a = 0;a < nums1.length;a++) {
      if (nums1[a] in map1) {
          map1[nums1[a]]++
      } else {
          map1[nums1[a]] = 1
      }
  }
  for (let a = 0;a < nums2.length;a++) {
      if (nums2[a] in map2) {
          map2[nums2[a]]++
      } else {
          map2[nums2[a]] = 1
      }
  }
  for (let a in map1) {
      if (a in map2) {
          for (let b = 0;b < Math.min(map1[a],map2[a]);b++) {
              result.push(a)
          }
      }
  }
  return result
};
//Runtime: 80 ms, faster than 16.00% of JavaScript online submissions for Intersection of Two Arrays II.