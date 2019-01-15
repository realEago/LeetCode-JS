var deleteDuplicates = function(head) {
  if (head == null) {
      return head
  }
  let temp = head
  while (temp.next != null) {       
      if(temp.val == temp.next.val) {
          temp.next = temp.next.next
      } else {
          temp = temp.next
      }
  }
  return head
};
//Runtime: 104 ms, faster than 4.85% of JavaScript online submissions for Remove Duplicates from Sorted List.