var checkRecord = function(s) {
  let counter = 0;
  for (let a = 0;a < s.length;a++) {
      if (s[a] == 'A') {
          counter++
      }
  }
  if((counter > 1)||((s.indexOf('LLL') != -1))) {
     return false
   }
  return true
};
//Runtime: 56 ms, faster than 50.59% of JavaScript online submissions for Student Attendance Record I.