/**
 * @param {string[]} words
 * @return {string}
 */


var alienOrder = function(words) {
 const diagraph = new Map();

 for (const word of words) {
     for (let i = 0; i < word.length; i+=1) {
         const curLetter = word[i];
         diagraph.set(curLetter, new Set());
     }
 }

 for (let i = 0; i < words.length - 1; i+=1) {
     const word1 = words[i];
     const word2 = words[i + 1];
     const minLength = Math.min(word1.length, word2.length);

     if (word1.substring(0, minLength) === word2.substring(0, minLength)) {
         if (word1.length > word2.length) return '';
     }

     for (let i = 0; i < minLength; i+=1) {
         if (word1[i] !== word2[i]) {
             diagraph.get(word1[i]).add(word2[i]);
             break;
         }
     }
 }

 const inDegrees = {};

 diagraph.forEach((set, letter) => {
     inDegrees[letter] = 0;
 });

 diagraph.forEach((set) => {
     const curSet = set.values()
     for (let i = 0; i < set.size; i+=1) {
         const nei = curSet.next().value;
         inDegrees[nei] += 1;
     }
 });

 const nodeWithNoIndegrees = [];
 const res = [];

 for (const letter of Object.keys(inDegrees)) {
     if (inDegrees[letter] === 0) nodeWithNoIndegrees.push(letter);
 }

 while (nodeWithNoIndegrees.length > 0) {
     const node = nodeWithNoIndegrees.shift();
     res.push(node);

     if (res.length === diagraph.size) return res.join('')

     const nodeNeighbors = diagraph.get(node);
     const nei = nodeNeighbors.values();

     for (let i = 0; i < nodeNeighbors.size; i+=1) {
         const curNei = nei.next().value;
         inDegrees[curNei] -= 1;
         if (inDegrees[curNei] === 0) nodeWithNoIndegrees.push(curNei);
     }
 }

 return '';    
};



// key: char <String>
// value = HashSet(neighbors) <String>

/*
given = ["wrt","wrf","er","ett","rftt"]
return alien alphabet. 

when sorting two words in lexical order (alphabet order), we look at the first letter that 
is different. The word with letter that comes first in the language alphabet has a smaller
lexical order, so it goes first. 

example: 
'wrt' vs. 'wrf'
f and t are the first different letters. 
because wrt comes before wrf, this means that 't' comes before 'f' in the alien languate. 

(t)->(f)

now compare 'wrf' to 'er'. the fist letters are different. 'wrf' comes before 'er', so
(w)->(e)

keep repeating to get the other two relationships:

(r)->(t)
(e)->(r)

Corner Cases:

case 1: 
given = [wrtg, wrt]
detection:
minLen of word1 and word2
if substring of word1 and word2 (0 - minLength) are equal
AND word1 > word2, then invalid string array so solution, return "".


case 2:
given = [cat, dog, cat];
detection   
if we have a circular route, then it is invalid.

example: 
diagraph =  c->d, d->c

c -> d
^    |
|    |
|____|

Other clues:
1. words are sorted in lexical order based on an alien dictionary
2. lexical order: each letter has a prerequisite, has to come before or after other letters
3. wants us to return alien alphabet in sorted lexical order
4. In case2: gives use clue that we are working with a directed graph and can't be a cycle

Algorithm: 

If you are familiar with topological sort, these clues will tell you to use this
algorithm.

topological sort =  given directed graph returns a sorted array. Can't be a cycle. 
topological sort = directed graph + return an sorted array  + can't be cycle

step 1: create our diagraph Map
@key = string
@value = set

diagraph = {
'w': set[e]
'r': set[t]
't': set[f]
'f': set[]
"e": set[r]
}

step 2: list out all the indegrees for each node

iterate through each key in our diagraph map, add property (neighbor: 0)
iterate again though each key in our diagraph, add 1 indegree for each neighbor. 
@key = string
@value = number

indegrees = {
'e':1
't':1
'f':1
'r':1
'w':0
}

// step 3: 
create our queue (containing the letters with no indegrees)
create result array

//step 4:
iterate while queue is not empty

//step6:
if queue is empty and result array length === size of our diagraph, return result array
else we have a cycle, return ""


*/

//Alternative Solution with DFS

/**
 * @param {string[]} words
 * @return {string}
 */

var alienOrderDFS = function(words) {
 const adj = {};

 for (const word of words) {
     for (const letter of word) {
       adj[letter] = new Set();
     }
 }

 for (let i = 0; i < words.length - 1; i += 1) {
     let w1 = words[i];
     let w2 = words[i + 1];
     let minLen = Math.min(w1.length, w2.length);
     if (w1.substring(0,minLen) === w2.substring(0, minLen) 
             && w1.length > w2.length) return '';

     for (let j = 0; j < minLen; j += 1) {
         if (w1[j] !== w2[j]) {
           adj[w1[j]].add(w2[j]);
           break;
         }
     }
 }

  

 const visit = new Map();
 const res = []

 function dfs(c) {
     if (visit.has(c)) return visit.get(c);

     visit.set(c, true);

     for (const nei of adj[c]) {
         if (dfs(nei)) return true;
     }

     visit.set(c, false);

     res.push(c);
 }

 for (const c of Object.keys(adj)) {
     if (dfs(c)) return '';
 }

 res.reverse();
 return res.join('');
};