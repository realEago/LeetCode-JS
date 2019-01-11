/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  let l3 = new ListNode(0)  //新建链表保存结果
  //let l = new ListNode(0)   //新建结点
  let t = l3                //新建指针
  let jinwei = 0            //保存进位值
  let num                   //保存相加值
  let d2                    //保存倒数第二个结点
  while (l1 || l2) {
      if(l1&&l2) {
        num = l1.val + l2.val + jinwei
      } else if (l1) {
        num = l1.val + jinwei
      } else if (l2) {
        num = l2.val + jinwei
      }
      let digit = num % 10  //相加后的个位值
      jinwei = (num - digit) /10
      t.val = digit
      t.next= new ListNode('val')
      d2 = t
      t = t.next
      if (l1) {
        l1 = l1.next
      } 
      if (l2) {
        l2 = l2.next
      }
  }
  if (jinwei) {
    t.val = jinwei
  } else {
    d2.next = null
  }
  return l3
};
//112m