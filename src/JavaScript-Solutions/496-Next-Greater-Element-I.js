/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var nextGreaterElement = function(nums1, nums2) {
    const map = new Map();
    const stack = [];
    for (const num of nums2) {
        while (stack.length > 0 && num > stack[stack.length - 1]) {
            map.set(stack.pop(), num);
        }
        stack.push(num);
    }

    while (stack.length > 0) {
        map.set(stack.pop(), -1);
    }

    return nums1.map(num => {
        return map.get(num);
    });
};