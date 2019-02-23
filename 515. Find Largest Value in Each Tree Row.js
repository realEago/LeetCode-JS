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
var largestValues = function(root) {
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
          result.push(Math.max(...ary))
      }
  }
  return result
};

//Runtime: 88 ms, faster than 47.93% of JavaScript online submissions for Find Largest Value in Each Tree Row.
//Memory Usage: 38.5 MB, less than 21.43% of JavaScript online submissions for Find Largest Value in Each Tree Row.