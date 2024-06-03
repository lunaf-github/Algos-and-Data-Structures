/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

// Best Solution - Sliding Window w/ Character Frequency (Array)
var findAnagrams = function(s, p) {
    const res = [];
    const charCount = Array.from({length: 26}, () => 0);

    [...p].forEach(char => {
        const charCode = char.charCodeAt(0) - 'a'.charCodeAt(0);
        charCount[charCode] += 1;
    });

    let left = 0;
    for (let right = 0; right < s.length; right += 1) {
        const rightCharIndex = s.charCodeAt(right) - 'a'.charCodeAt(0);

        charCount[rightCharIndex] -= 1;

        while (charCount[rightCharIndex] < 0) {
            const leftCharIndex = s.charCodeAt(left) - 'a'.charCodeAt(0);
            charCount[leftCharIndex] += 1;
            left += 1;
        }

        if (right - left + 1 === p.length) {
            res.push(left);
        }
    }

    return res;
};