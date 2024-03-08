/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

/*

    This problem is related to the is 242. Valid Anagram. 
    A purmutation means that order matters
    
    Example: 
    s1 = 'abc'

    The purmutations of s1 are = 'abc', 'acb', 'bac', 'bca', 'cba', 'cab'

    if s2 contains a substring that contains any of the purmutations listed above,
    then return true or else return false. 


    Notice that permurmutations are anagrams of s1

    We can use two strategies: 

    1. use two character count arrays, use a variable that keeps track of matches between the two arrays
    2. use one map, add frequency of s1, and then delete frequency as we iterate through s2, 
       use window length to determine valid purmutation to avoid iterating though map to check 
       if we have all zeros in our frequency map for every s2 charactor.  

    Second option is better because it uses 1 map compared to two arrays of size 26. 
*/


var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;

    const s1FreqMap = {};

    [...s1].forEach(char => {
        s1FreqMap[char] = (s1FreqMap[char] ?? 0) + 1;
    })

    let left = 0;
    
    for (let right = 0; right < s2.length; right += 1) {
     
        const curChar = s2[right];
   
        if (Object.hasOwn(s1FreqMap, curChar)) {

            // subtracting the frequency is equivalent to checking off an item from a checklist
            s1FreqMap[curChar] -= 1;
        } else {

            // start over again, add reset frequency map to initial values
            while (left <= right) {
                if (Object.hasOwn(s1FreqMap, s2[left])) {
                    s1FreqMap[s2[left]] += 1;
                }
                left += 1;
            }
        }

        /* 
            negative frequency =  frequency of a character inside the window is too high (checked off too many)
            Need to get rid of the excess characters
        */
        while (s1FreqMap[curChar] < 0) {
            s1FreqMap[s2[left]] += 1;
            left += 1;
        }

        /* 
            At this point, the current window should only have:
            1. characters in s1
            2. No excess characters
            So, if the window is the size of s1, that means that the substring contains an anagram of s1
        */ 
        if (right - left + 1 === s1.length) return true;
    }

    return false;
};