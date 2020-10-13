var toHex = function(num) {
  if (num == 0) {
      return '0'
  }
  if (num < 0) {
      num = num + Math.pow(2,32)
  }
  let result = ''
  while (num > 0) {
      result = getHexString(num % 16) + result;
      num = Math.floor(num / 16);
  }
  return result
};

function getHexString(n) {
  dic = {10: 'a', 11: 'b', 12: 'c', 13: 'd', 14: 'e', 15: 'f'};
  return (n < 10) ? n.toString() : dic[n];
}
//0%