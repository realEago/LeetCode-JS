var intersection = function(nums1, nums2) {
    let map1 = {}
    let map2 = {}
    let map  = {}
    let output = []
    for (let a = 0;a < nums1.length;a++) { //把num1的数字与该出现次数的映射装到对象map1
        if (nums1[a] in map1) {
            map1[nums1[a]]++
        }else {
            map1[nums1[a]] = 1
        }
    }
    for (let a = 0;a < nums2.length;a++) {//把num2的数字与该出现次数的映射装到对象map2
        if (nums2[a] in map2) {
            map2[nums2[a]]++
        }else {
            map2[nums2[a]] = 1
        }
    }
    for (let a in map1) {
        if(map2[a] > 0) {
            output.push(a)
        }
    }
    
    return output
};
//Runtime: 60 ms, faster than 77.74% of JavaScript online submissions for Intersection of Two Arrays.