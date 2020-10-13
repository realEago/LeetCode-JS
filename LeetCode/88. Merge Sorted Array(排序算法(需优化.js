var merge = function(nums1, m, nums2, n) {
  let c 
  for (let a = 0;a < nums2.length;a++) {
      nums1[m+a] = nums2[a]
  }
  for (let i = nums1.length;i > 0;i--) {
      for (let j = 0;j < i - 1;j++) {
          if (nums1[j] > nums1[j+1]) {
              nums1[j] = nums1[j] + nums1[j+1]
              nums1[j+1] = nums1[j] - nums1[j+1]
              nums1[j] = nums1[j] - nums1[j+1]
          }
      }
  }
  return nums1
};
//冒泡排序
//Runtime: 60 ms, faster than 35.94% of JavaScript online submissions for Merge Sorted Array.