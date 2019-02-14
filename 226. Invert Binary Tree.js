/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function invertBinaryTree(root) {
  if (root) {
      let temp = root.left
      root.left = root.right
      root.right = temp
      invertTree(root.left)
      invertTree(root.right)
  } 
}
var invertTree = function(root) {
  invertBinaryTree(root)  //按值传递 
  return root
};

//Runtime: 72 ms, faster than 29.54% of JavaScript online submissions for Invert Binary Tree.
//Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Invert Binary Tree.
