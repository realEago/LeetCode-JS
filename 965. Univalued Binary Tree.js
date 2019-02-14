/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  let temp = root.val      //取出值作为判断值
  let queue = [root]       //遍历二叉树
  while (queue.length) {
      let node = queue.shift()
      if (node) {
          if (node.val != temp) {
              return false
          }
          queue.push(node.left,node.right)
      } 
  }
  return true
};
//时间复杂度为O(n)
//空间复杂度为O(1)

//Runtime: 68 ms, faster than 100.00% of JavaScript online submissions for Univalued Binary Tree.
//Memory Usage: 34.1 MB, less than 100.00% of JavaScript online submissions for Univalued Binary Tree.