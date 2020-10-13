var reverseVowels = function(s) {
    let vowel = 'aeiouAEIOU'
    let temp = ''
    let result = ''
    for (let a in s) {
        if (vowel.includes(s[a])) {
            temp += s[a]
        }
    }
    for (let a in s) {
        if (vowel.includes(s[a])) {
            result += temp[temp.length - 1]
            temp = temp.slice(0,temp.length - 1)
        } else {
            result += s[a]
        }
    }
    return result
};
//Runtime: 176 ms, faster than 6.67% of JavaScript online submissions for Reverse Vowels of a String.
//Memory Usage: 46.5 MB, less than 0.00% of JavaScript online submissions for Reverse Vowels of a String.