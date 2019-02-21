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
//对二叉搜索进行中序遍历，创建一个哈希表来记录值
var findMode = function(root) {
  var dic = {}
  inOrderTraverse(root,dic)
  let max = - Infinity
  for (let i in dic) {
      if (dic[i] > max) {
          max = dic[i]
      }
  }
  let result = []
  for (let i in dic) {
      if (dic[i] == max) {
          result.push(i)
      }
  }
  return result
};

function inOrderTraverse(root,dic) {
  if (root) {
      inOrderTraverse(root.left,dic) 
      if (dic[root.val] == undefined) {
          dic[root.val] = 1
      } else {
          dic[root.val]++
      }
      inOrderTraverse(root.right,dic)
  }
}

//Runtime: 100 ms, faster than 40.14% of JavaScript online submissions for Find Mode in Binary Search Tree.
//Memory Usage: 41.8 MB, less than 35.71% of JavaScript online submissions for Find Mode in Binary Search Tree.
