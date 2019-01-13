var uniqueMorseRepresentations = function(words) {
  let alphabet = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  let translate=[]
  for (let a = 0;a < words.length;a++) {
      translate[a] = ''
      for (let b = 0; b < words[a].length;b++) { 
          let c = words[a].charCodeAt(b) - 97
          let d = alphabet[c]
          translate[a] += d
      }
  }
  let map = {}
  for (let a = 0;a < translate.length;a++) {
      if (translate[a] in map) {
          map[translate[a]]++
      } else {
          map[translate[a]] = 1
      }
  }
  let result = 0
  for (let a in map) {
      result++
  }
  return result
};
//Runtime: 80 ms, faster than 20.80% of JavaScript online submissions for Unique Morse Code Words.