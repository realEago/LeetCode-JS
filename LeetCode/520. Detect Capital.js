var detectCapitalUse = function(word) {
  if (word.charCodeAt() >= 97 && word.charCodeAt() <=122) {
      for (let a = 1;a < word.length;a++) {
          if (word.charCodeAt(a) < 97 || word.charCodeAt(a) > 122) {
              return false
          }
      }
  } 
  if (word.charCodeAt() >= 65 && word.charCodeAt() <= 90) {
      if (word.charCodeAt(1) >= 65 && word.charCodeAt(1) <= 90) {
          for (let a = 2;a < word.length;a++) {
               if (word.charCodeAt(a) < 65 || word.charCodeAt(a) > 90) {
                   return false
               }
           }
      }
      if (word.charCodeAt(1) >= 97 && word.charCodeAt(1) <= 122) {
          for (let a = 2;a < word.length;a++) {
               if (word.charCodeAt(a) < 97 || word.charCodeAt(a) > 122) {
                   return false
               }
           }
      }
  }
   return true
};
//Runtime: 120 ms, faster than 1.43% of JavaScript online submissions for Detect Capital.