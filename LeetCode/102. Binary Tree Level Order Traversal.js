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
//用两个数组分别记录节点，和每一层的值
var levelOrder = function(root) {
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
  return result
};

//Runtime: 72 ms, faster than 55.00% of JavaScript online submissions for Binary Tree Level Order Traversal.
//Memory Usage: 34.6 MB, less than 98.82% of JavaScript online submissions for Binary Tree Level Order Traversal.
