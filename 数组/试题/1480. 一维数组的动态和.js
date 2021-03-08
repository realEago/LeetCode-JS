/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let lastnum = null;
    const result = nums.map(it =>lastnum += it);
    return result;
};