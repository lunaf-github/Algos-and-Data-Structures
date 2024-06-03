/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

// Best Solution - Sliding Window w/ Character Frequency (Array)

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


// Solution 2 - Sliding Window w/ Character Frequency (Object)

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

            // Reset
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


// Solution 3 - Sliding Window w/ Character Frequency (HashMap)


var checkInclusion = function(s1, s2) {
    
    // Validate inputs
    if (s1.length > s2.length) return false;

    // ********  Set up 
    const freqMap = new Map();

    // Character Frequency 
    [...s1].forEach(char => {
        const incrementedCount = (freqMap.get(char) ?? 0) + 1;
        freqMap.set(char, incrementedCount);
    })

    // ******* Start of Two Pointer Process
    let left = 0;
    for (let right = 0; right < s2.length; right += 1) {
        const curChar = s2[right];
   
        // Subtract Counter
        if (freqMap.has(curChar)) {
            freqMap.set(curChar, freqMap.get(curChar) - 1);
        } else {

            // Reset
            while (left <= right) {
                const leftChar = s2[left];

                if (freqMap.has(leftChar)) {
                    freqMap.set(leftChar, freqMap.get(leftChar) + 1);
                }
                left += 1;
            }
        }

        // remove character that is exciding count
        while (freqMap.get(curChar) < 0) {
            const leftChar = s2[left];

            freqMap.set(leftChar, freqMap.get(leftChar) + 1);
            left += 1;
        }

        // Base Case - Window Length
        if (right - left + 1 === s1.length) return true;
    }

    return false;
};




