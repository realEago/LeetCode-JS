var findWords = function(words) {
  let result = []
  let map = { 'Q':1, 'q':1, 'W':1, 'w':1, 'E':1, 'e':1, 'R':1, 'r':1, 'T':1, 't':1, 'Y':1, 'y':1, 'U':1, 'u':1, 'I':1, 'i':1, 'O':1, 'o':1, 'P':1, 'p':1, 'A':2, 'a':2, 'S':2, 's':2, 'D':2, 'd':2, 'F':2, 'f':2, 'G':2, 'g':2, 'H':2, 'h':2, 'J':2, 'j':2, 'K':2, 'k':2, 'L':2, 'l':2, 'Z':3, 'z':3, 'X':3, 'x':3, 'C':3, 'c':3, 'V':3, 'v':3, 'B':3, 'b':3, 'N':3, 'n':3, 'M':3, 'm':3}
  for (let a = 0;a < words.length;a++) {
      for (let b = 0;b < words[a].length;b++) {
          let row = map[words[a][0]]
          if (map[words[a][b]] != row) {
              break;
          }
          if (b == words[a].length - 1) {
              result.push(words[a])
          }
      }
  }
  return result
};
//Runtime: 76 ms, faster than 2.94% of JavaScript online submissions for Keyboard Row.