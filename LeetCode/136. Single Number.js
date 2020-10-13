//因为其中只有一个数字的个数为一，利用异或的交换律，让数组内所有数字相互异或，得出来就是要的那个数字
var singleNumber = function(nums) {
    let num = nums[0]
    for ( a = 1;a < nums.length;a++) {
        num = num ^ nums[a]
    }
    return num
};
//Runtime: 56 ms, faster than 97.68% of JavaScript online submissions for Single Number.

//映射
var singleNumber = function(nums) {
    let map ={}
    for ( a = 0;a < nums.length;a++) {
        if (map[nums[a]] != undefined) {
            map[nums[a]]++
        } else {
            map[nums[a]] = 1
        }
    }
    for (let a in map) {
        if (map[a] == 1) {
            return a
        }
    }
};
//Runtime: 64 ms, faster than 66.59% of JavaScript online submissions for Single Number.

var singleNumber = function(nums) {
  for(var a = 0;a < nums.length - 1;a++) {
      for(var b = a+1;b < nums.length;b++) {
          if (nums[a] == nums[b]) {
              nums.splice(b,1)
              nums.splice(a,1)
              a -= 1
              break;
          }
      }
  }
  return nums[0]
};
//Runtime: 172 ms, faster than 15.97% of JavaScript online submissions for Single Number.