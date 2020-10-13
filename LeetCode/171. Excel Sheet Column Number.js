var titleToNumber = function(s) {
  let map = {A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,J:10,K:11,L:12,M:13,N:14,O:15,P:16,Q:17,R:18,S:19,T:20,U:21,V:22,W:23,X:24,Y:25,Z:26}
  let result = 0
  let temp = 1
  while (s.length) {
      result += map[s[s.length - 1]] * temp
      temp *= 26
      s = s.slice(0,s.length - 1)
  }
  return result
};
//Runtime: 96 ms, faster than 52.56% of JavaScript online submissions for Excel Sheet Column Number.