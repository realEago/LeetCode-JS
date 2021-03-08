/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let total = accounts.map(it => it.reduce((accumulator, currentvalue) => accumulator + currentvalue));
  let result = 0;
  total.forEach(it => {
      if(it > result) {
          result = it;
      }
  })
  return result;
};