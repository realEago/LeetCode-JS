//交换函数
function swap(ary,a,b) {
  ary[a] = ary[b] + ary[a]
  ary[b] = ary[a] - ary[b]
  ary[a] = ary[a] - ary[b]
}

//1、冒泡排序
//2、选择排序
//3、插入排序/BST
//4、归并排序
//5、快速排序


//冒泡排序 最优写法，无法再优化写法
//冒泡排序算法的运作如下：
// 1.比较相邻的元素。如果第一个比第二个大，就交换他们两个。
// 2.对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
// 3.针对所有的元素重复以上的步骤，除了最后一个。
// 4.持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。


//时间复杂度 O(n^2)
//空间复杂度 O(1)
function bubbleSort(ary) {
  for (let a = ary.length - 1;a > 0;a--) { //最后一位不扫描,扫描次数为数组元素个数减一
    var swapped = false   //记录是否交换过
    for (let b = 0; b < a;b++) {
      if (ary[b] > ary[b+1]) {
        swap(ary,b,b+1)
        swapped = true
      }
    }
    if (!swapped) {
      return ary  //如果一次都没有交换过则说明这个次序已经是从小到大的
    }
  }
  return ary
}
bubbleSort([2,4,5,6,7,2,21,5])


//选择排序
//选择排序（Selection sort）是一种简单直观的排序算法。它的工作原理如下。首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕
//算法复杂度 O(n^2)


function selectSort(ary) {
  for (let a = 0;a < ary.length - 1;a++) { //最后两个元素比出比较小的那个即可
    let minIndex = a
    for (let b = a + 1;b < ary.length;b++) {
      if(ary[b] < ary[minIndex]){
        minIndex = b
      }
    }
    if(minIndex != a) {
      swap(ary,a,minIndex)
    }
  }
  return ary
}


//归并排序
//时间复杂度为O(N*logN)
//空间复杂度为O(N)
// 1.把 n 个元素看成 n 个长度为 l 的有序子表
// 2.进行两两归并使记录关键字有序，得到 n/2 个长度为 2 的有序子表
// 3.重复第 2 步直到所有记录归并成一个长度为 n 的有序表为止。
function mergeSort(ary) {
  if(ary.length < 2) {
    return ary
  }
  var middle = parseInt(ary.length / 2) //相当于 Math.floor()
  var left = ary.slice(0,middle)
  var right = ary.slice(middle)
  return merge(mergeSort(left),mergeSort(right))
}
function merge(left,right) {
  var result = []
  var i = 0; j = 0;
  while(i < left.length && j < right.length) {
    if (left[i] > right[j]) {
      result.push(right[j])
      j++
    } else {
      result.push(left[i])
      i++
    }
  }
  while(i < left.length) {
    result.push(left[i])
    i++
  }
  while(j < right.length) {
    result.push(right[j])
    j++
  }
  return result
 }
//快速排序
//（1）在数据集之中，选择一个元素作为"基准"（pivot）。
//（2）所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。
//（3）对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
function quickSort(ary) {
  if(ary.length < 2) {
    return ary
  }
  var markIndex = parseInt(ary.length / 2)
  var mark = ary.splice(markIndex,1)[0]
  var left = []
  var right = []
  for (var i = 0; i < ary.length;i++) {
    if (ary[i] < mark) {
      left.push(ary[i])
    } else {
      right.push(ary[i])
    }
  }
  return quickSort(left).concat([mark],quickSort(right))
}



// 排序算法的稳定性：
//    指排序前后，相同元素的相对位置是否发生变化
//    如果发生变化，则称此排序算法为不稳定的排序算法
//    如果不发生变化，则称此排序算法为稳定的排序算法

// 冒泡排序：稳定（可以写成不稳定）
// 选择排序：不稳定
// BST/插入排序：稳定
// 归并排序：稳定（可以写成不稳定）
// 快速排序：不稳定