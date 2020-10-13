//映射
var twoSum = function(nums, target) {
  let map = {}
  for (let a = 0;a < nums.length;a++) {
      if (map[target - nums[a]] != undefined) {
          return [a,map[target - nums[a]]]
      } else {
          map[nums[a]] = a
      }
  }
};
//Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for Two Sum.

//双循环
// var twoSum = function(nums, target) {
//   var A = new Array()
//   for (var a = 0;a < nums.length - 1;a++) {
//       for (var b = a+1;b< nums.length ;b++) {
//           if (nums[a] + nums[b] == target) {
//               A.push(a,b)
//               return A
//           }
//       }
//   }
// };
//Runtime: 120 ms, faster than 47.22% of JavaScript online submissions for Two Sum.