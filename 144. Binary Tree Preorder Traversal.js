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
var preorderTraversal = function(root) {
  function traversal(root,result) {
      if (root) {
          result.push(root.val)
          traversal(root.left,result)
          traversal(root.right,result)
      }
  } 
  const result = []
  traversal(root,result)
  return result
};


//Runtime: 72 ms, faster than 26.54% of JavaScript online submissions for Binary Tree Preorder Traversal.
//Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for Binary Tree Preorder Traversal.
