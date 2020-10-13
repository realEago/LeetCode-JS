var sortArrayByParity = function(A) {
  var b = 0
  for(var a = 0;;a++) {
      if(A[a] % 2 == 1) {
          A.push(A[a])
          A.splice(a,1)
          a-=1
      }
      b++
      if(b==A.length){
          break
      }
  }
  return A
};
//Runtime: 88 ms, faster than 28.25% of JavaScript online submissions for Sort Array By Parity.