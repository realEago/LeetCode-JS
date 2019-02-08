/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  for (let a = 0 ;a < flowerbed.length;a++) {
      if (flowerbed[a] != 1) {
          if ((flowerbed[a - 1] == undefined && flowerbed[a + 1] == 0) || (flowerbed[a - 1] == 0 && flowerbed[a + 1] == 0) || (flowerbed[a - 1] == 0 && flowerbed[a + 1] == undefined)|| (flowerbed[a - 1] == undefined && flowerbed[a + 1] == undefined)) {
              flowerbed[a] = 1
              n--
          } 
      }
      if (n <= 0) {
          return true
      }
  } 
   return false
};
//Runtime: 88 ms, faster than 22.48% of JavaScript online submissions for Can Place Flowers.
//Memory Usage: 17.5 MB, less than 4.00% of JavaScript online submissions for Can Place Flowers.