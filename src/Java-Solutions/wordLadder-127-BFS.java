// use two-end BFS

class Solution {
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        Set<String> dict = new HashSet<>(wordList);
        if(!dict.contains(endWord)) return 0;

        Set<String> beginSet = new HashSet<>();
        Set<String> endSet = new HashSet<>();

        beginSet.add(beginWord);
        endSet.add(endWord);

        int len = 1;

        Set<String> visited = new HashSet<>();

        while(!beginSet.isEmpty() && !endSet.isEmpty()){
            if(beginSet.size() > endSet.size()){
                Set<String> set = beginSet;
                beginSet = endSet;
                endSet = set;

            }

            Set<String> temp = new HashSet<>();

            for(String word: beginSet){
                char[] letters = word.toCharArray();
                for(int i = 0; i < letters.length; i++){
                    for(char c = 'a'; c <= 'z'; c++){
                        char old = letters[i];
                        letters[i] = c;
                        String newWord = String.valueOf(letters);

                        if(endSet.contains(newWord)) return len + 1;

                        if(!visited.contains(newWord) && dict.contains(newWord)){
                            temp.add(newWord);
                            visited.add(newWord);

                        }

                        letters[i] = old;
                    }
                }
            }
            len++;
            beginSet = temp;
        }
        return 0;
    }
}