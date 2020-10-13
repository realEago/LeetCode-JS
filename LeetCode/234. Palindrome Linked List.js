var isPalindrome = function(head) {
  if (head == null || head.next == null) {
      return true
  }
  if (head.next.next == null) {
      return head.val == head.next.val
  }
  let stack = []
  let slow = head
  let fast = head
  while (fast.next && fast.next.next) {
      stack.push(slow.val)
      fast = fast.next.next
      slow = slow.next
  }
  stack.push(slow.val)
  slow = slow.next
  if (!fast.next) {  //判断链表长度奇偶性
      stack.pop()
  }
  while (slow) {
      if (slow.val != stack[stack.length - 1]) {
          return false
      }
      stack.pop()
      slow = slow.next
  }
  return true
};

//Runtime: 80 ms, faster than 45.80% of JavaScript online submissions for Palindrome Linked List.
//Memory Usage: 21 MB, less than 40.91% of JavaScript online submissions for Palindrome Linked List.