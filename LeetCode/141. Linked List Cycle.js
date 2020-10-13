var hasCycle = function(head) {
  while (head) {
      if (head.val == 'cycle') {
          return true
      } else {
          head.val = 'cycle'
      }
      head = head.next
  }
  return false
};
//Runtime: 84 ms, faster than 42.08% of JavaScript online submissions for Linked List Cycle.