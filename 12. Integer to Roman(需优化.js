var intToRoman = function(num) {
    let man = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    let roman = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
    let b = ''
    while (num > 0) {
        for (let a = 0;a < man.length;a++) {
            if (num/man[a] >=1) {
                b += roman[a]
                num-=man[a]
                a--
            }
        }
    }
    return b
};
//Runtime: 148 ms, faster than 40.33% of JavaScript online submissions for Integer to Roman.