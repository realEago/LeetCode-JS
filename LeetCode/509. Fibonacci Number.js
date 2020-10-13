//递归加记忆化，增加缓存
//时间复杂度 O(n)，空间复杂度 O(n)
//56%
var fib = function(N) {
    let a = [0,1]
    for (let b = 2;b <= N;b++) {
        let n = a[b - 1] + a[b - 2]
        a[b] = n
    }
    return a[N]
};

//时间复杂度 O(2^n)，空间复杂度 O(n) 进入新的调用栈也算空间，空间复杂度应该等于最深调用栈 O(n)
// var fib = function(N) {
//     if (N == 0) {
//         return N
//     }
//     if (N == 1) {
//         return N
//     }
//     return fib(N - 1) + fib(N - 2)
// };

//时间复杂度 O(2^n)，简洁写法
// var fib = function(N) {
//     N <= 1 ? return N : fib(N - 1) + fib(N - 2)
// };
