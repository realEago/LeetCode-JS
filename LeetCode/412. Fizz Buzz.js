var fizzBuzz = function(n) {
    var x = []
    for (var a = 1;a <= n;a++) {
      if (a % 3 == 0 && a % 5 == 0) {
          x.push("FizzBuzz")
      }else if (a % 3 == 0) {
        x.push("Fizz")
      }else if (a % 5 == 0) {
        x.push("Buzz")
      }else{
        x.push(""+a)
      }
    }
    return x
};
//Runtime: 64 ms, faster than 93.26% of JavaScript online submissions for Fizz Buzz.