//https://www.jianshu.com/p/a87b3d0eeab5
// 0.什么是算法？
// 输入：一个算法必须有零个或以上输入量。
// 输出：一个算法应有一个或以上输出量。
// 明确性：算法的描叙必须无歧义，实际运行结果是确定的
// 有限性：必须在有限个步骤内结束 有效性：又称可行性。能够被执行者实现。
// ————高德纳《计算机程序设计艺术》
// 先定义好互换函数Swap，作用为交换数组中两个数的值:
//
function swap(array, a, b) {
  var temp = array[a]
  array[a] = array[b]
  array[b] = temp
}

// 1.冒泡排序
// 冒泡排序可以理解为，遍历整个数组，同时每次将两个数进行比较，大的往后放小的往前放。这样一定次数后，大的就会渐渐向后聚集，从而实现排序的效果。
// JS实现：

function sort(array) {
  for (var i = 1; i < array.length; i++) {
    for (var j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
      }
    }
  }
  return array;
}

// 2.选择排序
// 选择排序：先将指针指向第一个元素i，并标记它为最小元素indexOfmin，定义它后面的一个元素为j.然后将i自增并遍历整个数组,只要第j个元素小于标记的最小元素，就将j的值赋给最小元素。同时，只要最小元素与i相等，就将最小元素与 i互换。

function sort(array) {
  var i
  var j
  var indexOfMin
  for (i = 0; i < array.length; i++) {
    indexOfMin = i
    for (j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexOfMin]) {
        indexOfMin = j
      }
    }
    if (indexOfMin !== i) {
      swap(array, i, indexOfMin)
    }
  }
  return array;
}

// 3.插入排序
// 插入排序的理解比较简单，可以简略的理解为打牌的时候起牌的方法：我手里已经有一副牌，每抓到一张新牌（读取新值）就和我手里的牌进行比较，大的话就放右边，小的话就放左边。首先我将要插入的数放在数组第一个位置，然后从最后一个位置开始从右向左查找。每当我从右开始读取的数比需要插入的数大，我就将其右移一位。这样既可花费n-1步找到需要排序的位置。
// JS代码实现：

function sort(array) {
  var i
  var j
  for (i = 1; i < array.length; i++) {
    console.log('current:' + i + ':' + array[i])
    var position = i
    for (j = i - 1; j >= 0; j--) {
      if (array[j] > array[i]) {
        position = j
        console.log('position:' + j)
      } else {
        var value = array[position]
        array.splice(position, 1)
        array.splice(j, 0, value)
        console.log('insert at :' + j)
      }
    }
  }
  return array;
}

// 4.快速排序
// 快速排序又称为自私算法，它优先让每个元素找到自己所在的位置，每次排序都实现“比我大的都在我右边，比我小的都在我左边”而不去计较它们的位置关系。具体做法为：先找一个基准点（一般用第一个元素或者中间元素）然后数组被分为两部分，如果选定值比它小，放左边；比它大，放右边。然后进行反复比较，就可以实现效果。

function sort(array) {
  if (array.length <= 1) {
    return array;
  }
  var len = Math.floor(array.length / 2);
  var cur = array.splice(len, 1);
  var left = [];
  var right = [];
  for (var i = 0; i < array.length; i++) {
    if (cur > array[i]) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return sort(left).concat(cur, sort(right));
}


