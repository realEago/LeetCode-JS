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
  function traversal(root) {
      if (root) {
          result.push(root.val)
          traversal(root.left)
          traversal(root.right)
      }
  }
  const result = [];
  traversal(root);
  return result;
};


/**
 * 执行用时：
 * 84 ms, 在所有 JavaScript 提交中击败了62.80%的用户
 * 内存消耗：
 * 37.9 MB, 在所有 JavaScript 提交中击败了39.33%的用户
 */




