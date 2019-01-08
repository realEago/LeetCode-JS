//Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2
var addStrings = function(num1, num2) {
  if (num2.length < num1.length) {
      var z = num2
      num2 = num1
      num1 = z
  }
  num1 = num1.split("")
  num2 = num2.split("")
  num2.unshift(0)
  for (var zero = num2.length - num1.length;zero > 0;zero--) {
      num1.unshift(0)
  }
  for (var zero = num2.length - 1;zero > 0;zero--) {
      num1[zero] = +num1[zero]
      num2[zero] = +num2[zero]
  }
  for (var a = num2.length - 1;a > 0;a--) {
      if(num1[a] + num2[a] >= 10) {
          num2[a-1] += 1
          num2[a] = num1[a] + num2[a] - 10
      }
      else{
          num2[a] = num1[a] + num2[a]
      }
  }
  if (num2[0] == 0) {
      num2.shift()
  }
  num2 = num2.join("")
  return num2
};
//Runtime: 88 ms, faster than 14.20% of JavaScript online submissions for Add Strings.