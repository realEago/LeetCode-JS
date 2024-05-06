/**
 * 《十大经典排序算法》 https://sort.hust.cc/  有图挺好
 *  https://github.com/hustcc/JS-Sorting-Algorithm
 */

/**
 *  关于时间复杂度：
 *
 *
 *
 */

/**
 * Q: 什么是稳定，什么是不稳定？
 * 
 * 排序算法的稳定性：
 * 指排序前后，相同元素的相对位置是否发生变化
 * 如果【发生变化】，则称此排序算法为【不稳定】的排序算法
 * 如果【不发生变化】，则称此排序算法为【稳定】的排序算法
 */

/**
 * 十大排序算法
 * 1、冒泡排序 O(n^2)        稳定（可以写成不稳定）
 * 2、选择排序 O(n^2)        不稳定
 * 3、插入排序 O(n^2)        稳定
 * 4、希尔排序(插排优化写法) 
 * 5、归并排序 O(nlogn)      稳定（可以写成不稳定）
 * 6、快速排序 O(nlogn)      不稳定 ⭐️
 * 7、堆排序  Ο(nlogn)
 * 8、计数排序
 * 9、桶排序
 * 10、基数排序
 */


// 交换函数
function swap(ary, a, b) {
  ary[a] = ary[b] + ary[a]
  ary[b] = ary[a] - ary[b]
  ary[a] = ary[a] - ary[b]
}

// 生成随机数组 100
let randomAry = (new Array(100)).fill(0).map(it => {
  return Math.floor(Math.random() * 100)
})

let a = [24, 56, 59, 34, 70, 37, 59, 62, 47, 40, 98, 34, 19, 63, 44, 61, 69, 34, 28, 69, 96, 25, 69, 58, 59, 71, 48, 88, 73, 16, 47, 8, 1, 1, 22, 82, 62, 12, 36, 20, 58, 80, 63, 70, 9, 12, 74, 3, 41, 23, 91, 50, 0, 44, 12, 6, 90, 84, 72, 87, 18, 59, 94, 1, 57, 19, 67, 20, 77, 43, 43, 16, 8, 73, 35, 11, 49, 41, 3, 36, 30, 50, 23, 11, 26, 94, 23, 75, 68, 36, 22, 4, 56, 27, 70, 9, 51, 75, 26, 18]

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
  for (let i = ary.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (ary[j] > ary[j + 1]) {
        swap(ary, j, j + 1);
      }
    }
  }
  return ary;
}
bubbleSort_easy(randomAry);
//时间复杂度 O(n^2)
//空间复杂度 O(1)
//优化写法，增加一个flag,当在一趟序列遍历中元素没有发生交换，说明这个序列是有序的，但是这种改进没有太大的作用
function bubbleSort(ary) {
  for (let a = ary.length - 1; a > 0; a--) { //最后一位不扫描,扫描次数为数组元素个数减一
    let swapped = false //记录是否交换过
    for (let b = 0; b < a; b++) {
      if (ary[b] > ary[b + 1]) {
        swap(ary, b, b + 1)
        swapped = true
      }
    }
    if (!swapped) return ary //如果一次都没有交换过则说明这个次序已经是从小到大的
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
function selectSort(array) {
  for (let a = 0; a < array.length - 1; a++) { //最后两个元素比出比较小的那个即可
    let minIndex = a
    for (let b = a + 1; b < array.length; b++) {
      if (array[b] < array[minIndex]) {
        minIndex = b
      }
    }
    if (minIndex != a) {
      swap(array, a, minIndex)
    }
  }
  return array;
}

/**
 * 3、插入排序 O(n^2) InsertionSort
 * 插入排序的理解比较简单，可以理解为打牌的时候起牌的方法：我手里已经有一副牌，每抓到一张新牌（读取新值）就和我手里的牌进行比较，大的话就放右边，小的话就放左边。
 * 1、遍历每一个数，把当前数与前边排好的队列一一比较
 * 2、比当前数大的往后移一位
 * 3、比当前数小的话就把当前的数放在这个小数的后边 （ 因为后边的比当前数大的都后移了，所以当前数放在小数的后边）
 */

function InsertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i]; // 要比较的数字
    let preIndex = i - 1;
    while (preIndex >= 0 && current < array[preIndex]) {
      array[preIndex + 1] = array[preIndex];
      preIndex--;
    }
    array[preIndex + 1] = current;
  }
  return array;
}


/**
 * 4、 希尔排序
 * 希尔排序是基于插入排序的以下两点性质而提出改进方法的：
 * 1.插入排序在对几乎已经排好序的数据操作时，效率高，即可以达到线性排序的效率；
 * 2.但插入排序一般来说是低效的，因为插入排序每次只能将数据移动一位
 * 
 * 希尔排序的基本思想是：先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，待整个序列中的记录“基本有序”时，再对全体记录进行依次直接插入排序。
 * 比较在希尔排序中是最主要的操作，而不是交换
 * https://zh.wikipedia.org/wiki/%E5%B8%8C%E5%B0%94%E6%8E%92%E5%BA%8F#JavaScript
 * 
 * 这里用了位运算符
 */
function shellSort(ary) {
  for (let gap = ary.length >> 1; gap > 0; gap >>= 1) {
    for (let i = gap; i < ary.length; i++) {
      let temp = ary[i];
      for (let j = i - gap; j >= 0 && ary[j] > temp; j -= gap) {
        ary[j + gap] = ary[j];
      }
      ary[j + gap] = temp;
    }
  }
  return ary;
}

Array.prototype.shell_sort = function () {
  var gap, i, j;
  var temp;
  for (gap = this.length >> 1; gap > 0; gap >>= 1)
    for (i = gap; i < this.length; i++) {
      temp = this[i];
      for (j = i - gap; j >= 0 && this[j] > temp; j -= gap)
        this[j + gap] = this[j];
      this[j + gap] = temp;
    }
  return this;
};

/**
 * 5、归并排序
 * 时间复杂度为O(N*logN)
 * 空间复杂度为O(N)
 * 1.把 n 个元素看成 n 个长度为 l 的有序子表
 * 2.进行两两归并使记录关键字有序，得到 n/2 个长度为 2 的有序子表
 * 3.重复第 2 步直到所有记录归并成一个长度为 n 的有序表为止。
 */
function mergeSort(ary) {
  if (ary.length < 2) {
    return ary
  }
  var middle = parseInt(ary.length / 2) //相当于 Math.floor()
  var left = ary.slice(0, middle)
  var right = ary.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  var result = []
  var i = 0;
  j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] > right[j]) {
      result.push(right[j])
      j++
    } else {
      result.push(left[i])
      i++
    }
  }
  while (i < left.length) {
    result.push(left[i])
    i++
  }
  while (j < right.length) {
    result.push(right[j])
    j++
  }
  return result
}

/**
 * 6、快速排序
 * 可以递归进行
 * 1、在数据集之中，选择一个元素作为"基准"（pivot）。
 * 2、所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。
 * 3、对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
 */

function quickSort(ary) {
  if (ary.length < 2) {
    return ary
  }
  var markIndex = parseInt(ary.length / 2)
  var mark = ary.splice(markIndex, 1)[0]
  var left = []
  var right = []
  for (var i = 0; i < ary.length; i++) {
    if (ary[i] < mark) {
      left.push(ary[i])
    } else {
      right.push(ary[i])
    }
  }
  return quickSort(left).concat([mark], quickSort(right))
}


/**
 * 7、堆排序
 * 堆排序（Heapsort）是指利用堆这种数据结构所设计的一种排序算法。
 * 堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点。堆排序可以说是一种利用堆的概念来排序的选择排序。
 * 分为两种方法：
 * 1、大顶堆：每个节点的值都大于或等于其子节点的值，在堆排序算法中用于升序排列；
 * 2、小顶堆：每个节点的值都小于或等于其子节点的值，在堆排序算法中用于降序排列
 */

var len;    // 因为声明的多个函数都需要数据长度，所以把len设置成为全局变量

function buildMaxHeap(arr) {   // 建立大顶堆
    len = arr.length;
    for (var i = Math.floor(len/2); i >= 0; i--) {
        heapify(arr, i);
    }
}

function heapify(arr, i) {     // 堆调整
    var left = 2 * i + 1,
        right = 2 * i + 2,
        largest = i;

    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest != i) {
        swap(arr, i, largest);
        heapify(arr, largest);
    }
}

function heapSort(arr) {
    buildMaxHeap(arr);

    for (var i = arr.length-1; i > 0; i--) {
        swap(arr, 0, i);
        len--;
        heapify(arr, 0);
    }
    return arr;
}

/**
 * 8、 计数排序
 * 计数排序的核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。
 */

function countingSort(arr, maxValue) {
  var bucket = new Array(maxValue+1),
      sortedIndex = 0;
      arrLen = arr.length,
      bucketLen = maxValue + 1;

  for (var i = 0; i < arrLen; i++) {
      if (!bucket[arr[i]]) {
          bucket[arr[i]] = 0;
      }
      bucket[arr[i]]++;
  }

  for (var j = 0; j < bucketLen; j++) {
      while(bucket[j] > 0) {
          arr[sortedIndex++] = j;
          bucket[j]--;
      }
  }

  return arr;
}

/**
 * 9、 桶排序
 * 桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。为了使桶排序更加高效，我们需要做到这两点：
 * 在额外空间充足的情况下，尽量增大桶的数量
 * 使用的映射函数能够将输入的 N 个数据均匀的分配到 K 个桶中
 * 同时，对于桶中元素的排序，选择何种比较排序算法对于性能的影响至关重要。
 * 什么时候最快: 当输入的数据可以均匀的分配到每一个桶中。
 * 什么时候最慢: 当输入的数据被分配到了同一个桶中。
 */

function bucketSort(arr, bucketSize) {
  if (arr.length === 0) {
    return arr;
  }

  var i;
  var minValue = arr[0];
  var maxValue = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
        minValue = arr[i];                // 输入数据的最小值
    } else if (arr[i] > maxValue) {
        maxValue = arr[i];                // 输入数据的最大值
    }
  }

  //桶的初始化
  var DEFAULT_BUCKET_SIZE = 5;            // 设置桶的默认数量为5
  bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
  var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;   
  var buckets = new Array(bucketCount);
  for (i = 0; i < buckets.length; i++) {
      buckets[i] = [];
  }

  //利用映射函数将数据分配到各个桶中
  for (i = 0; i < arr.length; i++) {
      buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
  }

  arr.length = 0;
  for (i = 0; i < buckets.length; i++) {
      insertionSort(buckets[i]);                      // 对每个桶进行排序，这里使用了插入排序
      for (var j = 0; j < buckets[i].length; j++) {
          arr.push(buckets[i][j]);                      
      }
  }

  return arr;
}

/**
 * 10、 基数排序
 * 基数排序是一种非比较型整数排序算法，其原理是将整数按位数切割成不同的数字，然后按每个位数分别比较。由于整数也可以表达字符串（比如名字或日期）和特定格式的浮点数，所以基数排序也不是只能使用于整数。
 * 这三种排序算法都利用了桶的概念，但对桶的使用方法上有明显差异案例看大家发的：
 *  基数排序：根据键值的每位数字来分配桶；
 *  计数排序：每个桶只存储单一键值；
 *  桶排序：每个桶存储一定范围的数值
 */

 //LSD Radix Sort
var counter = [];
function radixSort(arr, maxDigit) {
    var mod = 10;
    var dev = 1;
    for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        for(var j = 0; j < arr.length; j++) {
            var bucket = parseInt((arr[j] % mod) / dev);
            if(counter[bucket]==null) {
                counter[bucket] = [];
            }
            counter[bucket].push(arr[j]);
        }
        var pos = 0;
        for(var j = 0; j < counter.length; j++) {
            var value = null;
            if(counter[j]!=null) {
                while ((value = counter[j].shift()) != null) {
                      arr[pos++] = value;
                }
          }
        }
    }
    return arr;
}