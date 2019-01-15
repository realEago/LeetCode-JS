//递归反转链表
var swapPairs = function(head) {
  if (!head || !head.next) {
      return head
  }
  let a = head
  let b = head.next
  let c = head.next.next
  b.next = a
  a.next = swapPairs(c)
  return b
};
//Runtime: 72 ms, faster than 22.92% of JavaScript online submissions for Swap Nodes in Pairs.