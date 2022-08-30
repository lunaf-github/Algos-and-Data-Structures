class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        if(strs == null || strs.length == 0) return new ArrayList<>();
        HashMap<String, List<String>> map = new HashMap<>();
        for(String word : strs){
            char[] ca = new char[26];
            for(int i=0; i < word.length(); i++) ca[word.charAt(i) - 'a']++;
            String charKey = Arrays.toString(ca);
            if(!map.containsKey(charKey)) map.put(charKey , new ArrayList<>());
            map.get(charKey).add(word);
        }

        return new ArrayList<>(map.values());
    }
}