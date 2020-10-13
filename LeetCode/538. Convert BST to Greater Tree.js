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
//以右->根->左的顺序遍历二叉树，将遍历顺序的前一个结点的累加值记录起来，和当前结点相加，得到当前结点的累加值
//注意变量提升
var convertBST = function(root) {
  var preNum = 0
  var inOrderTraverse = function(root) {
      if (root) {
          inOrderTraverse(root.right)
          root.val += preNum
          preNum = root.val
          inOrderTraverse(root.left)
      }
  }   
  inOrderTraverse(root)
  return root
};

//Runtime: 112 ms, faster than 45.45% of JavaScript online submissions for Convert BST to Greater Tree.
//Memory Usage: 39.8 MB, less than 100.00% of JavaScript online submissions for Convert BST to Greater Tree.