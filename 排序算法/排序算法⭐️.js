//交换函数
function swap(ary,a,b) {
  ary[a] = ary[b] + ary[a]
  ary[b] = ary[a] - ary[b]
  ary[a] = ary[a] - ary[b]
}

// 生成随机数组 100
var randomAry = (new Array(100)).fill(0).map(it => {
  return Math.floor(Math.random()*100)
})

[24, 56, 59, 34, 70, 37, 59, 62, 47, 40, 98, 34, 19, 63, 44, 61, 69, 34, 28, 69, 96, 25, 69, 58, 59, 71, 48, 88, 73, 16, 47, 8, 1, 1, 22, 82, 62, 12, 36, 20, 58, 80, 63, 70, 9, 12, 74, 3, 41, 23, 91, 50, 0, 44, 12, 6, 90, 84, 72, 87, 18, 59, 94, 1, 57, 19, 67, 20, 77, 43, 43, 16, 8, 73, 35, 11, 49, 41, 3, 36, 30, 50, 23, 11, 26, 94, 23, 75, 68, 36, 22, 4, 56, 27, 70, 9, 51, 75, 26, 18]

//1、冒泡排序 O(n^2)
//2、选择排序 O(n^2)
//3、插入排序 O(n^2)
//4、希尔排序(插排优化写法)
//4、归并排序 O(nlogn)
//5、快速排序 O(nlogn)
//6、堆排
//7、表排
//9、


/**
 * 1、冒泡排序 O(n^2)
 * 
 * 冒泡排序算法的运作如下：
 * 1.比较相邻的元素。如果第一个比第二个大，就交换他们两个。
 * 2.对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
 * 3.针对所有的元素重复以上的步骤，除了最后一个。
 * 4.持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
 */
// 一般思路写法
function bubbleSort_easy(ary) {
  for(var i = ary.length - 1; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (ary[j] > ary[j+1]) {
        swap(ary, j, j+1);
      }
    }
  }
  return ary;
}

bubbleSort_easy(randomAry);

//时间复杂度 O(n^2)
//空间复杂度 O(1)
// 最优写法，无法再优化写法
function bubbleSort(ary) {
  for (let a = ary.length - 1; a > 0; a--) { //最后一位不扫描,扫描次数为数组元素个数减一
    var swapped = false   //记录是否交换过
    for (let b = 0; b < a; b++) {
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

bubbleSort(randomAry);

/**
 * 2、选择排序 O(n^2)
 * 工作原理如下:
 * 1、首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置.
 * 2、然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
 * 3、以此类推，直到所有元素均排序完毕
 */

function selectSort(ary) {
  for (let a = 0; a < ary.length - 1; a++) { //最后两个元素比出比较小的那个即可
    let minIndex = a
    for (let b = a + 1; b < ary.length; b++) {
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

/**
 * 3、插入排序 O(n^2) InsertionSort
 * 插入排序的理解比较简单，可以理解为打牌的时候起牌的方法：我手里已经有一副牌，每抓到一张新牌（读取新值）就和我手里的牌进行比较，大的话就放右边，小的话就放左边。
 * 首先我将要插入的数放在数组第一个位置，然后从最后一个位置开始从右向左查找。
 * 每当我从右开始读取的数比需要插入的数大，我就将其右移一位。这样既可花费n-1步找到需要排序的位置。
 */

function Insertion(array) {
  for (let i = 1; i < array.length; i++) {
    let preIndex = i - 1;
    let current = array[i];
    while (preIndex >= 0 && current < array[preIndex]) {
      array[preIndex + 1] = array[preIndex];
      preIndex--;
    }
    array[preIndex + 1] = current;
  }
  return array;
}

function Insertion(array) {
  for (let i = 1; i < array.length; i++) {
    let preIndex = i - 1;
    let current = array[i]; // 要比较的数字
    while (preIndex >= 0 && current < array[preIndex]) {
      array[preIndex + 1] = array[preIndex];
      preIndex--;
    }
    array[preIndex + 1] = current;
  }
}

/**
 * 4、归并排序
 * 时间复杂度为O(N*logN)
 * 空间复杂度为O(N)
 * 1.把 n 个元素看成 n 个长度为 l 的有序子表
 * 2.进行两两归并使记录关键字有序，得到 n/2 个长度为 2 的有序子表
 * 3.重复第 2 步直到所有记录归并成一个长度为 n 的有序表为止。
 */
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

/**
 * 5、快速排序
 * 可以递归进行
 * 1、在数据集之中，选择一个元素作为"基准"（pivot）。
 * 2、所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。
 * 3、对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
 */

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
// 插入排序：稳定
// 归并排序：稳定（可以写成不稳定）
// 快速排序：不稳定