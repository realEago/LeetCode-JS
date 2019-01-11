//Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2
var addStrings = function(num1, num2) {
    while (num1.length < num2.length) { //将两个数的位数补成一样长
        num1 = '0' + num1
    }
    while (num2.length < num1.length) {
        num2 = '0' + num2
    }
    l = num1.length
    let result = '' //最后结果
    let jinwei = 0
    for (let a = num1.length - 1;a >= 0;a--) {
        let num = (+num1[a]) + (+num2[a]) + jinwei  //两数相加再加上进位
        let y = num % 10    
        jinwei = (num - y) / 10
        result = y + result
    }
    if (jinwei) {
        result = jinwei + result
    }
    return result
};
//Runtime: 64 ms