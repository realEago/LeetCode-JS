/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
  const result = []
  postorderTraversal(root,result)
  return result
};

function postorderTraversal(root,result) {
  if (root) {
      root.children.forEach(it => postorderTraversal(it,result))
      result.push(root.val)
  }
}

//Runtime: 748 ms, faster than 27.10% of JavaScript online submissions for N-ary Tree Postorder Traversal.
//Memory Usage: 81.2 MB, less than 100.00% of JavaScript online submissions for N-ary Tree Postorder Traversal.