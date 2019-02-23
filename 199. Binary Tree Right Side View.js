/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (!root) {
      return []
  }
  var result = [root.val]
  var queue = [root]
  while (queue.length) {
      var temp = []
      var ary = []
      for (var i of queue) {
          if (i.left != null) {
              temp.push(i.left)
              ary.push(i.left.val)
          }
          if (i.right != null) {
              temp.push(i.right)
              ary.push(i.right.val)
          }
      }
      queue = temp
      if (ary.length) {
          result.push(ary[ary.length - 1])
      }
  }
  return result
};

//Runtime: 76 ms, faster than 41.83% of JavaScript online submissions for Binary Tree Right Side View.
//Memory Usage: 35 MB, less than 7.69% of JavaScript online submissions for Binary Tree Right Side View.