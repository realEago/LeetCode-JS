var flipAndInvertImage = function(A) {
  for(var a = 0;a < A.length;a++) {
      A[a]=A[a].reverse()
  }
  for(var a = 0;a < A.length;a++) {
    for(var b = 0;b < A.length;b++){
        if(A[a][b]==1){
            A[a][b]=0
        }else{
            A[a][b]=1
        }
    }
  }
  return A
};
//Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Flipping an Image.