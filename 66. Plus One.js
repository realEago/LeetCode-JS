var plusOne = function(digits) {
  digits[digits.length - 1] += 1
  for (var a = digits.length - 1;a >= 0;a-- ) {
    if(digits[a] == 10) {
      digits[a] = 0 
      if(a == 0) {
        digits.unshift(1)
      }else {
        digits[a - 1] += 1
      }
    }
    else{
      break;
    }
  }
  return digits
};
//Runtime: 56 ms, faster than 51.18% of JavaScript online submissions for Plus One.