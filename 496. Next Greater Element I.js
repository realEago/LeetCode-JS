var nextGreaterElement = function(nums1, nums2) {
  let result = []
  for (let a = 0;a < nums1.length;a++) {
      let onoff = false
      for (var b = 0;b < nums2.length;b++) {
          if(nums2[b] == nums1[a]) {
              onoff = true
          }
          if (onoff == true && nums2[b] > nums1[a]) {
              result.push(nums2[b])
              break;
          }
          if (b == nums2.length - 1) {
              result.push(-1)
          }
      }
      
  }
  return result
};
//Runtime: 84 ms, faster than 16.67% of JavaScript online submissions for Next Greater Element I.