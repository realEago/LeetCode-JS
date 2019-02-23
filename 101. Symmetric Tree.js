/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) {
      return true
  }
  var queue = [root]
  while (queue.length) {
      var temp = []
      var ary = []
      for (let i of queue) {
          if (i.left != null) {
              temp.push(i.left)
              ary.push(i.left.val)
          } else {
              ary.push(i.left)
          }
          if (i.right != null) {
              temp.push(i.right)
              ary.push(i.right.val)
          } else {
              ary.push(i.right)
          }
      }
      queue = temp
      for (let j = 0 ;j < ary.length / 2;j++) {
          if (ary[j] != ary[ary.length - 1 -j]) {
              return false
          }
      }
  }
  return true
};
//Runtime: 80 ms, faster than 40.92% of JavaScript online submissions for Symmetric Tree.
//Memory Usage: 36.1 MB, less than 6.67% of JavaScript online submissions for Symmetric Tree.