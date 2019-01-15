//先循环计数链表有多少个结点
//再循环链表跳过要删除的目标结点
var removeNthFromEnd = function(head, n) {
  let num = 0
  var temp = head
  while (temp != null) {
      num++
      temp = temp.next
  }
  if(num == n) {
      return head = head.next
  }
  var temp = head
  while(true) {
      if (num - n - 1 == 0) {
          temp.next = temp.next.next
          break;
      }
      num--
      temp = temp.next
  }
  return head
};
//Runtime: 76 ms, faster than 31.38% of JavaScript online submissions for Remove Nth Node From End of List.