/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let map1 = {}
  let map2 = {}
  let map  = {}
  let output = []
  for (let a = 0;a < nums1.length;a++) { //把num1的数字与该出现次数的映射装到对象map1
      if (nums1[a] in map1) {
          map1[nums1[a]]++
      }else {
          map1[nums1[a]] = 1
      }
  }
  for (let a = 0;a < nums2.length;a++) {//把num2的数字与该出现次数的映射装到对象map2
      if (nums2[a] in map2) {
          map2[nums2[a]]++
      }else {
          map2[nums2[a]] = 1
      }
  }
  for (let a in map1) {//把num1的数字作为对象map的属性
       map[a] = 1
  }
  for (let b in map2) {//遍历map2的属性到map中
      if (b in map) {
         map[b]++
     } else {
         map[b] = 1
     }
  }
  for (let c in map) { //map的属性出现两次，说明为交集
      if(map[c] == 2) {
          output.push(c)
      }
  }
  return output
};
//Runtime: 60 ms, faster than 77.74% of JavaScript online submissions for Intersection of Two Arrays.