var convertToBase7 = function(num) { 
  if (num > 0) {
      var sum = ""
      while (num > 0) {
          var a = num % 7
          sum = a + sum
          num = Math.floor(num / 7)
      }
  }else if(num < 0){
      var sum = ""
      num = Math.abs(num)
      while (num > 0) {
          var a = num % 7
          sum = a + sum
          num = Math.floor(num / 7)
      }
      sum = "-" + sum
  }else {
      return "0"
  }
  return sum
};
//Runtime: 56 ms, faster than 86.96% of JavaScript online submissions for Base 7.
//用短除法，字符串拼接