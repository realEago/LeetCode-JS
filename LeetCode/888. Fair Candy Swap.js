/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
  let numA = 0
  let numB = 0
  for (let a of A) {
      numA += a
  }
  for (let a of B) {
      numB += a
  }
  for (let a of A) {
      for (let b of B) {
          if (numA - a + b == numB - b + a) {
              return [a,b]
          }
      }
  }
};

//Runtime: 1216 ms, faster than 12.56% of JavaScript online submissions for Fair Candy Swap.
//Memory Usage: 25 MB, less than 20.31% of JavaScript online submissions for Fair Candy Swap.