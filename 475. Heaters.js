/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
  let min = -Infinity
  for (let a of houses) {
      let mindistance = Infinity
      for (let b of heaters) {
          if (Math.abs(b - a) < mindistance) {
              mindistance = Math.abs(b - a)
          }
      }
      if (mindistance > min) {
          min = mindistance
      }
  }
  return min
};

//Runtime: 4100 ms, faster than 5.21% of JavaScript online submissions for Heaters.
//Memory Usage: 23.2 MB, less than 24.24% of JavaScript online submissions for Heaters.