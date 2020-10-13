var reverseList = function(head) {
  if(!head||!head.next) {
      return head
  }
  let a = null
  let b = null
  let c = head
  while(c) {
      a = b
      b = c
      c = c.next
      b.next = a
  }
  return b
};
//Runtime: 60 ms