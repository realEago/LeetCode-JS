var reverse = function(x) {
    var a
    var b = 0
    if(x >= 0){
        while (x > 0) {
            a = x % 10
            b = b * 10 + a
            x = (x - a) / 10
        }
    }else{
        x = 0 - x
        while (x > 0) {
            a = x % 10
            b = b * 10 + a
            x = (x - a) / 10
        }
        b = 0 - b
    }
    if((b > 2 ** 31 - 1) || (b < (-2) ** 31 
)) {
        return 0
    }
    return b
};
//Runtime: 92 ms, faster than 18.08% of JavaScript online submissions for Reverse Integer.