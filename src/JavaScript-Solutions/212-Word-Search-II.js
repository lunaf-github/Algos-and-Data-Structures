/*
Vague interview question
Given an m x n board of characters and a list of strings words, return all words on the board.

Questions to interviewer:
1. What is the largest and smallest dimension of the  given matrix?
2. what is the smallest word in the given array?
3. Are there duplicate words inside  the matrix?
4. How are words read? left to right , top to bottom?  Are words that are  writtenbackwards? Are
   those valid?
5. Do words share the same letters?
6. Are all works consist of only lowercase english letters?

High level strategy:

1. construct a trie using the input array. Each node has an array of children (26 leet) and a variable (word) = string
2. iterate through the matrix,visiting each cell
3.      check if trie has current letter, if yes,
            recurse to next node in trie, left, up, right, down
            look for 
*/


/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */


function TrieNode(){
 this.children = [];
 this.word = null;
} 

var findWords = function(board, words) {

 // recursive build try function
 function buildTrie(i, word, curNode){
     if(i === word.length){
         curNode.word = word;
         return;
     } 
     const ch = word.charCodeAt(i)
     if(!curNode.children[ch - a]) curNode.children[ch - a] = new TrieNode();
     buildTrie(i + 1, word, curNode.children[ch - a]);
 }
 

 // recursive search function
 function search(r, c, curNode){
     // console.log(curNode)
     if(curNode.word){
         res.push(curNode.word); 
         curNode.word = null;
     } 
     const directions = [[0,-1],[0,1],[-1,0],[1,0]];
     
     const character = board[r][c];
     board[r][c] = '#';
     
     for(const dir of directions){
         const newRow = r + dir[0];
         const newCol = c + dir[1];
         
         if(newRow < 0 || newRow >= board.length || 
            newCol < 0 || newCol >= board[0].length) continue;
         
         const nextChar = board[newRow][newCol];
         if(curNode.children[nextChar.charCodeAt(0) - a]){
           search(newRow, newCol, curNode.children[nextChar.charCodeAt(0) - a]);  
         } 
     }
     
     board[r][c] = character;
 }
 
 // Main logic
 const root = new TrieNode();
 const a = 'a'.charCodeAt(0);
 const res = [];
 
 for(const word of words) buildTrie(0, word, root);
 
 for(let r = 0; r < board.length; r++){
     for(let c = 0; c < board[0].length; c++){
         const char = board[r][c];
         if(!root.children[char.charCodeAt(0) - a]) continue;
         search(r,c, root.children[char.charCodeAt(0) - a]);
     }
 }
 
 return res;
};

