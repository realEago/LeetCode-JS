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
var preorder = function(root) {
  const result = []
  preOrderTraversal(root,result) 
  return result
};

function preOrderTraversal(root,result) {
  if (root) {
      result.push(root.val)
      root.children.forEach(ele => preOrderTraversal(ele,result))
      // for (let i = 0; i < root.children.length;i++) {
      //     preOrderTraversal(root.children[i],result)
      // }
  }
}

//Runtime: 700 ms, faster than 76.79% of JavaScript online submissions for N-ary Tree Preorder Traversal.
//Memory Usage: 81.3 MB, less than 100.00% of JavaScript online submissions for N-ary Tree Preorder Traversal.