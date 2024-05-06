// 把根节点在 rootPos 位置的顺序储存的二叉树转换为一个链式二叉树
// 链式二叉树的缺点是无法知道父节点的位置
function ary2tree(ary, rootPos = 0) {
  if (ary.length === 0) {
    return null;
  }

  if (rootPos > ary.length -1) {
    return null;
  }

  if (ary[rootPos] == null) {
    return null;
  }

  let node = {
    val: ary[rootPos],
    left: ary2tree(ary, rootPos * 2 + 1),
    right: ary2tree(ary, rootPos * 2 + 2),
  }

  return node;
}

// 把一个链式二叉树转换成数组, 根节点放在 rootPos 位置
// 一般写法，缺点是空缺太多了
function tree2ary(root) {
  return _tree2ary(root);

  function _tree2ary(root, ary = [], rootPos = 0) {
    if (!root) {
      return [];
    }
    ary[rootPos] = root.val;
    _tree2ary(root.left, ary, rootPos * 2 + 1);
    _tree2ary(root.right, ary, rootPos * 2 + 2);
    return ary;
  }
}