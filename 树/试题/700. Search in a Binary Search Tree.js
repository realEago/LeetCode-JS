/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  let queue = [root]
  while (queue.length) {
      let node = queue.shift()
      if (val < node.val && node.left != null) {
          queue.push(node.left)
      } else if (val > node.val && node.right != null) {
          queue.push(node.right)
      } else if (val == node.val){
          return node
      }
  }
  return null
};

//Runtime: 100 ms, faster than 48.59% of JavaScript online submissions for Search in a Binary Search Tree.
//Memory Usage: 41.6 MB, less than 100.00% of JavaScript online submissions for Search in a Binary Search Tree.