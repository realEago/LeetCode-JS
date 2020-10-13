var numJewelsInStones = function(J, S) {
    var counter = 0
    for(var a = 0;a < J.length;a++) {
        var baoshi =J[a]
        for(var b = 0;b < S.length;b++) {
            var shitou = S[b]
            if(shitou == baoshi) {
                counter ++
            }
        }
    }
    return counter
};
//Runtime: 76 ms, faster than 15.84% of JavaScript online submissions for Jewels and Stones.