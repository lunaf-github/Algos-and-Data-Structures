/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */

//1.  Brute force, we check every conbination possible and compare once we a string of the same length of s3. 
// TC: O(2^(m + n)), m is the length of s1 and n is the length of s2. At worse case, we have to decide between 
// two letters, take a letter from either s1 or s2. 
var isInterleave = function(s1, s2, s3) {
    
    function helper(i, j, res) {
        if (i === s1.length && j === s2.length && res === s3) return true;
        let ans = false;

        if (i < s1.length) {
            ans = ans || helper(i + 1, j, res + s1[i]);
        }

        if (j < s2.length) {
            ans = ans || helper(i, j + 1, res + s2[j]);
        }

        return ans;
    }

    if (s1.length + s2.length !== s3.length) return false;
    return helper(0, 0, '');
};


//2.  Slightly better brute force, we compute the s3 pointer by adding both s1 and s2 pointer. 
// if s3[i + j] is not equal to s1[i] or s2[j], we stop traversing that branch 

var isInterleave = function(s1, s2, s3) {
    
    function helper(i, j) {
        if (i === s1.length && j === s2.length) return true;

        if (i < s1.length && s1[i] === s3[i + j] && helper(i + 1, j)) {
            return true;
        }

        if (j < s2.length && s2[j] === s3[i + j] && helper(i, j + 1)) {
            return true
        }

        return false;
    }

    if (s1.length + s2.length !== s3.length) return false;
    return helper(0, 0);
};


//3. With memoization, There are repeated computations in the previous solution. We can save time by memoizing. 

//  s1 = "aabcc",             
//  s2 = "dbbca", 
//  s3 = "aadbbcbcac"
//                 
//                (0,0)              
//                / 
//              (1,0)  
//              / 
//          (2,0) 
//              \    
//          ___(2,1)___  
//         /           \
//     (3,1)            (2,2)
//        \             /   \
//        *(3,2)    *(3,2)   (2,3)  <---  (3,2) is seen more than once
//        /            /
//    (4,2)          (4,2)
//        \             \
//        (4,3)         (4,3)
//        /    \        /    \
//      (5,3)  (4,4)  (5,3)  (4,4)
//                 \           \
//                  (4,5)       (4,5)
//                 /            /
//             (5,5)         (5,5)
// 
// In this solution, we used a hashset to cache the falsies only. No need to cache truthies because once we find
// a truthy, we are done with our algorithm. We want to stop traversing a graph that will end up leading to a falsy. 
// A matrix could have been used, but in JavaScript, using a set is much easier. This solution passes all test cases. 

var isInterleave = function(s1, s2, s3) {
    
    function helper(i, j) {
        if (i === s1.length && j === s2.length) return true;
        if (dp.has(`${i}:${j}`)) return false;

        if (i < s1.length && s1[i] === s3[i + j] && helper(i + 1, j)) {
            return true;
        }

        if (j < s2.length && s2[j] === s3[i + j] && helper(i, j + 1)) {
            return true
        }

        dp.add(`${i}:${j}`);
        return false;
    }
    
    const dp = new Set();
    if (s1.length + s2.length !== s3.length) return false;
    return helper(0, 0);
};

// 4. DP method. We can solve this iteratively. This is a fancy way of solving the previous problem, which is called
// a 2D DP solution. Our base case, as show in our previous solution, is once our pointers for s1 and s2 strings go
// out of boind, we return true because we were able to use all letters from both s1 and s2 to construct s3. 

// Remember that (s1.length + 1) + (s2.length + 1) = (s3.length + 1)

// So in this solution, we create a matrix and set all elements to False. The dimensions of the matrix needs to be 
// one unit larger because we should be able to have one pointer out of bound while having the other pointer within
// bound and still have our s3 pointer within bound. S3 pointer will only go out of bound of both s1 and s2 pointers
// are out of bound. 

//  s1 = "aabcc",                
//  s2 = "dbbca",    
//  s3 = "aadbbcbcac"
//                 
//     0 1 2 3 4 5  
//     d b b c a     c
// 0 a F F F F F F 
// 1 a F F F F F F
// 2 b F F F F F F 
// 3 c F F F F F F
// 4 c F F F F F F
// 5   F F F F F T
//r

// we traverse the matrix backwards. 
// we check for 2 things. 
// a) if s1 pointer is not out of bound, we check if s3[s1 pointer + s2 pointer] = s1[s1 pointer] and 

var isInterleave = function(s1, s2, s3) {

    const row = s1.length;
    const col = s2.length;

    if (row + col !== s3.length) return false;

    const dp = Array(row + 1).fill().map(() => {
        return new Array(col + 1).fill(false);
    }); 

    dp[row][col] = true;

    for (let r = row; r >= 0; r--) {
        for (let c = col; c >= 0; c--) {
            if (r < row && s3[r + c] === s1[r] && dp[r + 1][c]) {
                dp[r][c] = true;
            }
            if (c < col && s3[r + c] === s2[c] && dp[r][c + 1]) {
                dp[r][c] = true;
            }
        }
    }

    return dp[0][0];
};