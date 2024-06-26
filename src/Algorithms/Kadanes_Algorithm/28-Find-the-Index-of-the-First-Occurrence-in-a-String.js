var strStr = function(haystack, needle) {
    const freqMap = Array.from({ length: 26}, () => 0);

    [...needle].forEach(ch => {
        freqMap[ch.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    })

    let left = 0;

    for (let right = 0; right < haystack.length; right += 1) {
        
        freqMap[haystack.charCodeAt(right) - 'a'.charCodeAt(0)] -= 1;

        while (freqMap[haystack.charCodeAt(right) - 'a'.charCodeAt(0)] < 0) {
            freqMap[haystack.charCodeAt(left) - 'a'.charCodeAt(0)] += 1;
            left += 1;
        }

        if (haystack[left] === needle[0] && right - left + 1 === needle.length) {
            if (haystack.substring(left, right + 1) === needle) return left;
        } 
    }

    return -1;
}


// Kadane's algrithm (Template 2)
var strStr = function(haystack, needle) {
    if (needle === "") return 0;  // edge case for empty needle

    for (let left = 0; left <= haystack.length - needle.length; left++) {
        let right = 0;
        while (right < needle.length && haystack[left + right] === needle[right]) {
            right++;
        }
        if (right === needle.length) {
            return left;  // found the needle
        }
    }
    return -1;  // needle not found
};