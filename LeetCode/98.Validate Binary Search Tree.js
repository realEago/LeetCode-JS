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
//1.中序遍历二叉树，如果为升序的话则说明为二叉搜索树
//2.递归遍历
var isValidBST = function(root) {
    var temp = []
    inOrderTraverse(root,temp)
    for (let a = 0;a < temp.length - 1;a++) {
        if (temp[a] >= temp[a+1]) {  //注意右边的一定要比左边的大
            return false
        }
    }
    return true
};

function inOrderTraverse(root,ary) { //中序遍历
    if (root) {
         inOrderTraverse(root.left,ary)
         ary.push(root.val)
         inOrderTraverse(root.right,ary)
    }
}

//Runtime: 84 ms, faster than 45.94% of JavaScript online submissions for Validate Binary Search Tree.
//Memory Usage: 37.5 MB, less than 100.00% of JavaScript online submissions for Validate Binary Search Tree.