var romanToInt = function(s) {
  let b = 0
  for (let a = 0;a < s.length;a++) {
      if((s[a] == 'I') && (s[a+1] == 'V'||s[a+1] == 'X')) {
          switch(s[a+1]) {
              case 'V':a++;b+=4;break;
              case 'X':a++;b+=9;break;
          }
      }else if((s[a] == 'X') && (s[a+1] == 'L'||s[a+1] == 'C')) {
          switch(s[a+1]) {
              case 'L':a++;b+=40;break;
              case 'C':a++;b+=90;break;
          }
      }else if((s[a] == 'C') && (s[a+1] == 'D'||s[a+1] == 'M')) {
           switch(s[a+1]) {
              case 'D':a++;b+=400;break;
              case 'M':a++;b+=900;break;
          }
      }else {
          switch(s[a]){
              case 'I':b+=1;break;
              case 'V':b+=5;break;
              case 'X':b+=10;break;
              case 'L':b+=50;break;
              case 'C':b+=100;break;
              case 'D':b+=500;break;
              case 'M':b+=1000;break;
          }
      }
  }
  return b
};
//Runtime: 136 ms, faster than 73.71% of JavaScript online submissions for Roman to Integer.