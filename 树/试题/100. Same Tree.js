/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  let treep = JSON.stringify(tree2ary(p)) //转成字符串判断是否相等
  let treeq = JSON.stringify(tree2ary(q))
  if (treep == treeq) {
      return true
  } else {
      return false
  }
};

var tree2ary = function(tree) {  //把树转成数组，非递归写法
  let result = []
  let queue = [tree]
  while (queue.length) {
      let node = queue.shift()
      if (node) {
         result.push(node.val)
         queue.push(node.right,node.left)
      } else {
         result.push(null)
      }
  }
  return result
}

//Runtime: 68 ms, faster than 40.57% of JavaScript online submissions for Same Tree.
//Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Same Tree.



// 遍历写法
var isSameTree = function(p, q) {
  function sameTree(a, b) {
      if (a === null && b !== null){
          return false;
      } else if (a !== null && b=== null) {
          return false;
      } else if (a === null && b === null) {
          return true;
      } else {
          return a.val === b.val && sameTree(a.left, b.left) && sameTree(a.right, b.right);
      }
  }
 return sameTree(p,q);
};