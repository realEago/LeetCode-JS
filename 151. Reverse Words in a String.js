var reverseWords = function(str) {
  let temp = str.split(' ')
  let result = ''
  for (let a = temp.length - 1;a >= 0;a--) {
      if(temp[a] != '') {
         result += temp[a] + ' ' 
      }
  }
  result = result.trim()
  return result
};
//坑点，如果是空格分割的话，则字符串内的空格会被分好几个
//Runtime: 72 ms, faster than 65.22% of JavaScript online submissions for Reverse Words in a String.