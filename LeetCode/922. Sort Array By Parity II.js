var sortArrayByParityII = function(A) {
  var even = new Array()
  var odd = new Array()
  var e=0
  var o=0
  for(var a = 0;a < A.length;a++){
    if(A[a]%2==0){
      even.push(A[a])
    }else{
      odd.push(A[a])
    }
  }
  for(var a = 0;a < A.length;a++){
    if(a%2==0){
      A[a]=even[e]
      e+=1
    }else{
      A[a]=odd[o]
      o+=1
    }
  }
  return A
};
//Runtime: 104 ms, faster than 87.75% of JavaScript online submissions for Sort Array By Parity II.