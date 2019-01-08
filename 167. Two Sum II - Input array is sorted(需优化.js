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