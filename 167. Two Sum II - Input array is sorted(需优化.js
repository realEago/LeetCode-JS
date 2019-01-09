//双指针（有待进一步思考）（二分法）
var twoSum = function(numbers, target) {
    let a = 0
    let b = numbers.length - 1
    while (numbers[a] + numbers[b] != target) {
        if (numbers[a] + numbers[b] > target) {
            b--
        } else {
            a++
        }
    }
    return [a+1,b+1]
};
//Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for Two Sum II - Input array is sorted.

var twoSum = function(numbers, target) {
  for(var a = 0;a < numbers.length - 1;a++) {
      for (var b = a+1;b < numbers.length;b++) {
           if(numbers[a] + numbers[b] == target) {
              var c = [a+1,b+1]
              return c
          }
      }
  }
};
//Runtime: 328 ms, faster than 8.40% of JavaScript online submissions for Two Sum II - Input array is sorted.