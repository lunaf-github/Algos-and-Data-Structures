/**
 * @param {string} s
 * @return {number}
 */

// create your own target string using the freqCounter

var lengthOfLongestSubstring = function(s) {
    const freqCounter = Array.from({ length: 26 }, () => 0);

    for (let i = 0; i < s.length; i += 1) {
        freqCounter[s.charCodeAt(i) - 'a'.charCodeAt(0)] = 1;
    }

    let maxLength = 0;

    let left = 0; 
    for (let right = 0; right < s.length; right += 1) {
        const curCharIndex = s.charCodeAt(right) - 'a'.charCodeAt(0);
        freqCounter[curCharIndex] -= 1;

        while (freqCounter[curCharIndex] < 0) {
            const leftCharIndex = s.charCodeAt(left) - 'a'.charCodeAt(0);
            freqCounter[leftCharIndex] += 1;
            left += 1;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};