/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) {
      return []
  }
  var result = []
  var queue = [root]
  while (queue.length) {
      var temp = []
      var traversal = []
      for (let i of queue) {
          traversal.push(i.val)
          for (let j of i.children) {
              temp.push(j)
          }
      }
      queue = temp
      result.push(traversal)
  }
  return result
};

//Runtime: 708 ms, faster than 73.86% of JavaScript online submissions for N-ary Tree Level Order Traversal.
//Memory Usage: 80.2 MB, less than 87.23% of JavaScript online submissions for N-ary Tree Level Order Traversal.