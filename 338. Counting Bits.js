var countBits = function(num) {
  let a = []
  for (let b = 0;b <= num;b++) {
      let sum = 0
      let c = b
      while (c > 0) {
          if(c % 2 ==1) {
             c = c / 2 | 0
             sum++
          } else {
             c /= 2
          }
      }
      a.push(sum)
  }
  return a 
};
//