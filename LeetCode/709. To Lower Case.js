var toLowerCase = function(str) {
  for (let a = 0;a < str.length;a++) {
      if(str.charCodeAt(a) >= 65 && str.charCodeAt(a) <= 90) {
          str = str.replace(str[a],String.fromCharCode(str.charCodeAt(a) + 32)) 
      }
  }
  return str
};
//Runtime: 48 ms, faster than 100.00% of JavaScript online submissions for To Lower Case.