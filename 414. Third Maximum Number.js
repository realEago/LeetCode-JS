var thirdMax = function(nums) {
  let max1 = -Infinity
  let max2 = -Infinity
  let max3 = -Infinity
  for (let a of nums) {
      if (max1 < a) {
          max3 = max2
          max2 = max1
          max1 = a
      }
      if (max2 < a && a < max1) {
          max3 = max2
          max2 = a
      }
      if (max3 < a && a < max2) {
          max3 = a 
      }
  }
  if (max1 > max2 && max2 > max3 && max3 != -Infinity) {
      return max3
  } else {
      return max1
  }
};
//Runtime: 76 ms, faster than 64.44% of JavaScript online submissions for Third Maximum Number.