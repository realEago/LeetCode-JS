var mergeTwoLists = function(l1, l2) {
  var l3 = new ListNode('val')  //新链表头
  var l4 = l3 //新链表尾
  while (l1 || l2) {
      if (l1 == null) {
          l4.next = l2
          l4 = l4.next
          l2 = l2.next
      } else if (l2 == null) {
          l4.next = l1
          l4 = l4.next
          l1 = l1.next
      } else if (l1.val >= l2.val) {
          l4.next = l2
          l4 = l4.next
          l2 = l2.next
      } else if (l2.val > l1.val) {
          l4.next = l1
          l4 = l4.next
          l1 = l1.next
      } 
  }
  l3 = l3.next
  return l3
};
//Runtime: 84 ms, faster than 8.27% of JavaScript online submissions for Merge Two Sorted Lists.