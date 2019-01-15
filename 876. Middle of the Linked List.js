//双指针，一个走快一点，一个走慢一点
var middleNode = function(head) {
  let fast = head
  let slow = head
  while (fast.next != null) {
      slow = slow.next
      fast = fast.next.next
      if (fast == null) {
          return slow
      }
  }
  return slow
};
//Runtime: 68 ms, faster than 31.52% of JavaScript online submissions for Middle of the Linked List.