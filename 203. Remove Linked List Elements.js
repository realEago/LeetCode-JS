/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let head2 = head
  let pointer = head
  let front = null
  while (pointer) {
      if (pointer.val == val) {
          if (front == null) {              //头结点等于val
              pointer = pointer.next
              head2 = head2.next
          } else if (pointer.next == null) {//尾节点等于val
              front.next = null
              pointer = null
          } else {                          //中间节点等于val
              front.next = pointer.next
              pointer = pointer.next
          }
      } else {
          front = pointer
          pointer = pointer.next
      }
  }
  return head2
};

//Runtime: 92 ms, faster than 34.84% of JavaScript online submissions for Remove Linked List Elements.
//Memory Usage: 18.5 MB, less than 23.65% of JavaScript online submissions for Remove Linked List Elements.