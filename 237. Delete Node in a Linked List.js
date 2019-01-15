//比较巧妙的一道题
//通过把该节点的下一个节点的值赋给该节点，然后让该节点指向下一个的下一个节点即可
//即使该节点的值等于下一个节点
var deleteNode = function(node) {
  node.val = node.next.val
  node.next = node.next.next
};
//34%