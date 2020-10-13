/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  let a = A.length
  let b = A[0].length
  let c = new Array(b)
  for (let x = 0;x < b;x++) {
      c[x] = []
  }
  
  for(let d = 0;d < a;d++) {
      for(let e = 0;e < b;e++) {
          c[e][d] = A[d][e]
      }
  }
  return c
};

//112m