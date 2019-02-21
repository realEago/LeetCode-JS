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
//分别对l1,l2的链表头进行比较，哪个头小把哪个放入新链表
var mergeTwoLists = function(l1, l2) {
    var l3 = new ListNode('val')  //新链表头
    var l4 = l3 //新链表尾
    while (l1 || l2) {
        if (l1 == null) {
            l4.next = l2
            l2 = null
        } else if (l2 == null) {
            l4.next = l1
            l1 = null
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

//Runtime: 80 ms, faster than 45.57% of JavaScript online submissions for Merge Two Sorted Lists.
//Memory Usage: 35.5 MB, less than 100.00% of JavaScript online submissions for Merge Two Sorted Lists.