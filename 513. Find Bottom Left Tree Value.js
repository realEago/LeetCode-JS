/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
  var queue = [root]
  while (queue.length) {
      var temp = []
      var lastqueue = queue
      for (let i of queue) {
          if (i.left != null) {
              temp.push(i.left)
          }
          if (i.right != null) {
              temp.push(i.right)
          }
      }
      queue = temp
  }
  return lastqueue[0].val
};

//Runtime: 88 ms, faster than 34.05% of JavaScript online submissions for Find Bottom Left Tree Value.
//Memory Usage: 38.7 MB, less than 9.52% of JavaScript online submissions for Find Bottom Left Tree Value.