// 交换函数
const swap = (ary, a, b) => {
    ary[a] = ary[b] + ary[a];
    ary[b] = ary[a] - ary[b];
    ary[a] = ary[a] - ary[b];
}
// 生成随机数组 100
let randomAry = (new Array(100)).fill(0).map(it => {
    return Math.floor(Math.random() * 100)
})

console.log('随机数组10', randomAry);

// 一般思路写法
function bubbleSort_easy(ary) {
    for (let i = ary.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (ary[j] > ary[j+1]) {
                swap(ary, j, j+1);
            }
        }
    }
}
// bubbleSort_easy(randomAry);
// console.log('排序后=>', console.log(randomAry));

const bubbleSort = (ary) => {
    for(let i = ary.length - 1;i > 0; i--) {
        for (let j = 0;j < i;j++) {
            if (ary[j] > ary[j+1]) {
                swap(ary, j , j+1);
            }
        }
    }
}

// 选择排序

const selectSort = (ary) => {
    console.log('ary=>', ary.length);
    for (let a = 0; a < ary.length - 1;a++) {
        let minIndex = a;
        for (let b = a + 1; b < ary.length; b++) {
            if (ary[b] < ary[minIndex]) {
                minIndex = b;
            }
        }
        if (minIndex !== a) {
            swap(ary, a, minIndex);
        }
    }
    return ary;
}
// const temp = selectSort(randomAry);
// console.log('选择排序', temp);

console.log('')
// 快速排序
const quickSort = (ary) => {
    if (ary.length < 2) {
        return ary;
    }
    let markIndex = parseInt(ary.length / 2);
    // console.log('markIndex', markIndex);
    let mark = ary.splice(markIndex, 1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < ary.length;i++) {
        if (ary[i] < mark) {
            left.push(ary[i]);
        } else {
            right.push(ary[i]);
        }
    }
    return quickSort(left).concat([mark], quickSort(right));
}

console.log('快速排序', quickSort(randomAry));
