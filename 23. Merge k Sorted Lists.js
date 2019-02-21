/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
//遍历整个数组，把小的拿出来放进链表
//时间复杂度为O（n^2）
var mergeKLists = function(lists) {
  let result = null
  let resultTail
  while (true) {
      let min = Infinity
      let index 
      for (let i = 0; i < lists.length;i++) {
        if ((lists[i]) && ((min == Infinity) || (lists[i].val < min.val))) {
            min = lists[i]
            index = i
         } 
      }
      if (min == Infinity) {
          return result
      } else {
        lists[index] = lists[index].next
      }
      if (result == null) {
          result = min
          resultTail = result
      } else {
          resultTail.next = min
          resultTail = resultTail.next
      }
  }    
};

//Runtime: 6032 ms, faster than 1.05% of JavaScript online submissions for Merge k Sorted Lists.
//Memory Usage: 37.5 MB, less than 100.00% of JavaScript online submissions for Merge k Sorted Lists.

//遍历把值放入排序二叉树
//再中序遍历二叉树后
//再把数组改成链表
var mergeKLists = function(lists) {
  let result = []
  let bst = null
  for (let i = 0;i < lists.length;i++) {
      while(lists[i]) {
          bst = insertinBST(bst,lists[i].val)
          lists[i] = lists[i].next
      }
  }
  inOrderTraverse(bst,Array.prototype.push.bind(result))
  //console.log(result)
  return ary2List(result) 
};

function insertinBST(bst,val) {
  if (!bst) {
      return {
          val:val,
          left:null,
          right:null
      }
  } else {
      if (val >= bst.val) {
          bst.right = insertinBST(bst.right,val) 
      } else {
          bst.left = insertinBST(bst.left,val)
      }
      return bst
  }
}

function inOrderTraverse(root,action) {
  if (root) {
      inOrderTraverse(root.left,action)
      action(root.val)
      inOrderTraverse(root.right,action)
  }
}

function ary2List(ary) {
  if (!ary.length) {
      return null
  }
  let head = {
      val:ary[0],
      next:null
  }
  let pre = head
  for (let i = 1;i < ary.length;i++) {
      var node = {
          val:ary[i],
          next:null
      }
      pre.next = node
      pre = node
  }
  return head
}

//Runtime: 124 ms, faster than 58.33% of JavaScript online submissions for Merge k Sorted Lists.
//Memory Usage: 39.8 MB, less than 100.00% of JavaScript online submissions for Merge k Sorted Lists.