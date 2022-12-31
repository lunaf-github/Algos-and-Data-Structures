/** 
211. Design Add and Search Words Data Structure

Design a data structure that supports adding new words and finding if a string 
matches any previously added string.

Implement the WordDictionary class:

WordDictionary() Initializes the object.
void addWord(word) Adds word to the data structure, it can be matched later.
bool search(word) Returns true if there is any string in the data structure that 
matches word or false otherwise. word may contain dots '.' where dots can be 
matched with any letter.
 
Example:
Input
  ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
  [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
Output
  [null,null,null,null,false,true,true,true]
Explanation
  WordDictionary wordDictionary = new WordDictionary();
  wordDictionary.addWord("bad");
  wordDictionary.addWord("dad");
  wordDictionary.addWord("mad");
  wordDictionary.search("pad"); // return False
  wordDictionary.search("bad"); // return True
  wordDictionary.search(".ad"); // return True
  wordDictionary.search("b.."); // return True
 
Constraints:
  1 <= word.length <= 25
  word in addWord consists of lowercase English letters.
  word in search consist of '.' or lowercase English letters.
  There will be at most 3 dots in word for search queries.
  At most 104 calls will be made to addWord and search.
*/

const Node = function(){
 this.children = {}
 this.isWord = false;
}

var WordDictionary = function() {
 this.root = new Node();
};

/** 
* @param {string} word
* @return {void}
*/

WordDictionary.prototype.addWord = function(word) {
 let curNode = this.root;
 for(let i = 0; i < word.length; i++){
     const letter = word[i];
     if(!curNode.children[letter]) curNode.children[letter] = new Node();
     curNode = curNode.children[letter];
 }
 curNode.isWord = true;
};

/** 
* @param {string} word
* @return {boolean}
*/

WordDictionary.prototype.search = function(word) {
 return this.match(0, word, this.root)
};

WordDictionary.prototype.match = function(i, word, curNode){
 if(i === word.length) return curNode.isWord;
 
 if(word[i] === '.'){
     for(const key of Object.keys(curNode.children)){
         if(this.match(i + 1, word, curNode.children[key])) return true;;
     }
 }else{
     if(curNode.children[word[i]] && this.match(i + 1, word, curNode.children[word[i]])) return true;
 }
 return false;
};

/** 
* Your WordDictionary object will be instantiated and called as such:
* var obj = new WordDictionary()
* obj.addWord(word)
* var param_2 = obj.search(word)
*/

/**
 * Questions to ask interviewer:
 * 
 * problem:
 * Design a data structure that supports adding new words and 
 * finding if a string matches any previously added string.
 * 
 * Questions:
 * 1. Are we working with only lowercase letters?
 * 2. What will the search method return? a boolean or the word
 *    found?
 * 3. Does the addWord function return anything?
 * 3. When I initialize the datastructure, do will a word be 
 *    used as an argument for the contructor?
 */