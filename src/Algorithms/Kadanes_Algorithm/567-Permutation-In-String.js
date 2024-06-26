/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * @description Kadanne's Agorithm
 */


var checkInclusion = function(s1, s2) {
    
    // Validate inputs
    if (s1.length > s2.length) return false;

    // ********  Set up 
    const freqMap = Array.from({length: 26}, () => 0);

    // Character Frequency 
    [...s1].forEach(char => {
        freqMap[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    })

    // ******* Start of Two Pointer Process
    let left = 0;
    for (let right = 0; right < s2.length; right += 1) {
        const curCharCode = s2[right].charCodeAt(0) - 'a'.charCodeAt(0);
   
        // Subtract Counter
        freqMap[curCharCode] -= 1;

        // remove characters that are exciding count or does not existing
        while (freqMap[curCharCode] < 0) {
            const leftCharCode = s2[left].charCodeAt(0) - 'a'.charCodeAt(0);

            freqMap[leftCharCode] += 1;
            left += 1;
        }

        // Base Case - Window Length
        if (right - left + 1 === s1.length) return true;
    }

    return false;
};


var checkInclusion = function(s1, s2) {
    
    // Validate inputs
    if (s1.length > s2.length) return false;

    // ********  Set up 
    const s1FreqMap = {};

    // Character Frequency 
    [...s1].forEach(char => {
        s1FreqMap[char] = (s1FreqMap[char] ?? 0) + 1;
    })

    // ******* Start of Two Pointer Process
    let left = 0;
    for (let right = 0; right < s2.length; right += 1) {
     
        const curChar = s2[right];
   
        // Subtract Counter
        if (Object.hasOwn(s1FreqMap, curChar)) {
            s1FreqMap[curChar] -= 1;
        } else {

            // Reset - reminds me of kadane's algorithm
            while (left <= right) {
                if (Object.hasOwn(s1FreqMap, s2[left])) {
                    s1FreqMap[s2[left]] += 1;
                }
                left += 1;
            }
        }

        // remove character that is exciding count
        while (s1FreqMap[curChar] < 0) {
            s1FreqMap[s2[left]] += 1;
            left += 1;
        }

        // Base Case - Window Length
        if (right - left + 1 === s1.length) return true;
    }

    return false;
};




