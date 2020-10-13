var distributeCandies = function(candies) {
  let candy = {}
  for (let a = 0;a < candies.length;a++) {
      if (candies[a] in candy) {
          candy[candies[a]] ++
      } else {
          candy[candies[a]] = 1
      }
  }
  let num = 0
  for (var a in candy) {
      num++
  }
  if (num > candies.length/2) {
      num = candies.length/2
  }
  return num
};
//Runtime: 348 ms, faster than 20.71% of JavaScript online submissions for Distribute Candies.