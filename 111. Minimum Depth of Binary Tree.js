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
var minDepth = function(root) {
  if (!root) {
      return []
  }
  var result = 1
  var queue = [root]
  while (queue.length) {
      var temp = []
      for (let k of queue) {
          if ((k != null) && (k.left == null) && (k.right == null)) {
              return result
          } 
          if (k.left != null) {
              temp.push(k.left)
          }
          if (k.right != null) {
                  temp.push(k.right)
          }
      }
      queue = temp
      result++
  }
};

//Runtime: 80 ms, faster than 55.79% of JavaScript online submissions for Minimum Depth of Binary Tree.
//Memory Usage: 37 MB, less than 64.00% of JavaScript online submissions for Minimum Depth of Binary Tree.