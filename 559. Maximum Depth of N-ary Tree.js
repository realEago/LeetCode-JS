/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) {
      return 0
  }
  var result = 0
  var queue = [root]
  while (queue.length) {
      var temp = []
      for (let a of queue) {
          for (let b of a.children) {
              temp.push(b)
          }
      }
      result++
      queue = temp
  }
  return result
};

//Runtime: 708 ms, faster than 54.74% of JavaScript online submissions for Maximum Depth of N-ary Tree.
//Memory Usage: 80.9 MB, less than 8.70% of JavaScript online submissions for Maximum Depth of N-ary Tree.