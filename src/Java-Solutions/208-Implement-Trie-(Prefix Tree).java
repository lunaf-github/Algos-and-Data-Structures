class TrieNode{
    public boolean isWord = false;
    public TrieNode[] children = new TrieNode[26];
    public TrieNode(){};
}



class Trie {

    TrieNode root;

    public Trie() {
        root = new TrieNode();
    }

    public void insert(String word) {
        TrieNode pointer = root;

        for(int i = 0; i < word.length(); i++){
            char c = word.charAt(i);
            if(pointer.children[c - 'a'] == null) pointer.children[c - 'a'] = new TrieNode();
            pointer = pointer.children[c - 'a'];
        }

        pointer.isWord = true;
    }

    public boolean search(String word) {
        TrieNode pointer = root;

        for(int i = 0; i < word.length(); i++){
            char c = word.charAt(i);
            if(pointer.children[c - 'a'] == null) return false;
            pointer = pointer.children[c - 'a'];
        }

        return pointer.isWord;
    }

    public boolean startsWith(String prefix) {
        TrieNode pointer = root;

        for(int i = 0; i < prefix.length(); i++){
            char c = prefix.charAt(i);
            if(pointer.children[c - 'a'] == null) return false;
            pointer = pointer.children[c - 'a'];
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * boolean param_2 = obj.search(word);
 * boolean param_3 = obj.startsWith(prefix);
 */