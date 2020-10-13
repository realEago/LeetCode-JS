var multiply = function(num1, num2) {
  if (num2 == 0 || num1 == 0) {
      return '0'
  }
  if (num2 =='1') {
      return num1
  }
  let x = []//记录 num2 上的每一位与 num1 相乘的结果
  let z = '' //最后结果
  let zero = '' //放大倍数
  for (let a = num2.length - 1;a >= 0;a--) {
      let y = '0'
      //if ((+num2[a])==0) continue
      for (let b = 0;b < (+num2[a]);b++) {
          y = addStrings(y,num1)
      }
      y = y + zero
      zero = zero + '0'
      x.push(y)
  }
  for (let a = 0;a < x.length;a++) {
      z = addStrings(z,x[a])
  }
  return z
}

var addStrings = function(num1, num2) { // 415.Add String 函数
  while (num1.length < num2.length) { //将两个数的位数补成一样长
      num1 = '0' + num1
  }
  while (num2.length < num1.length) {
      num2 = '0' + num2
  }
  l = num1.length
  let result = '' //最后结果
  let jinwei = 0
  for (let a = num1.length - 1;a >= 0;a--) {
      let num = (+num1[a]) + (+num2[a]) + jinwei  //两数相加再加上进位
      let y = num % 10    
      jinwei = (num - y) / 10
      result = y + result
  }
  if (jinwei) {
      result = jinwei + result
  }
  return result
};

//152ms