/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  var result = []
  if (root) {
      var node = [root]
  } else {
      return result
  }
  while (node.length) {
      var temp = []
      node.forEach(it => temp.push(it.val))
      result.push(temp)
      var levelTemp = []
      while (node.length) {
          var a = node.shift()
          if (a.left != null) {
              levelTemp.push(a.left)
          }
          if (a.right != null) {
              levelTemp.push(a.right)
          }
      }
      node = levelTemp
  }
  return result.reverse()
};
//Runtime: 72 ms, faster than 54.20% of JavaScript online submissions for Binary Tree Level Order Traversal II.
//Memory Usage: 34.7 MB, less than 81.36% of JavaScript online submissions for Binary Tree Level Order Traversal II.
//102题颠倒下顺序