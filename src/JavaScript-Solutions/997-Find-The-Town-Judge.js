// directed graph

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
 const count = Array.from(Array(n + 1), val => 0);
 
 for(const t of trust){
     count[t[0]]--;
     count[t[1]]++;
 }
 
 for(let i = 1; i < count.length; i++){
     if(count[i] === n - 1) return i;
 }
 
 return -1;
};


