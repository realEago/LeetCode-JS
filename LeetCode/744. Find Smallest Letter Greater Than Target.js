var nextGreatestLetter = function(letters, target) {
    let left = 0
    let right = letters.length-1
    let center = (left + right) / 2 | 0
    if (target.charCodeAt() >= letters[right].charCodeAt()) {
        return letters[left]
    }
    if (target.charCodeAt() < letters[left].charCodeAt()) {
        return letters[left]
    }
    for (let a = 0;a < letters.length;a++) {
        if (target.charCodeAt() < letters[a].charCodeAt()) {
            return letters[a]
        }
    }
    return letters[right]
};
//Runtime: 144 ms, faster than 0.00% of JavaScript online submissions for Find Smallest Letter Greater Than Target.