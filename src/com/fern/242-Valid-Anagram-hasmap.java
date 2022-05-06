// class Solution {
//     public boolean isAnagram(String s, String t) {
//         HashMap <Character, Integer> smap = new HashMap<>();
//         int sl = s.length();
//         int tl = t.length();
//         // check if length ob s and t match, if not return false
//         if(sl != tl) return false;

//         // iterate through s string,
//         for(int i=0; i < sl; i++){
//             // Add character to Hashmap key (if not exist) and add counter in Hashmap value
//             smap.put(s.charAt(i), smap.getOrDefault(s.charAt(i),0) + 1);
//             // Add character to Hashmap key (if not exist) and subtract counter in Hashmap value
//             smap.put(t.charAt(i), smap.getOrDefault(t.charAt(i),0) - 1);
//         }

//         // Iterate though hasmap, if any key has a value not equal to 0, return false
//         for(char c: smap.keySet()){
//             if(smap.get(c) != 0) return false;
//         }

//         // After iteration, return true;
//         return true;
//     }
// }



class Solution {
    public boolean isAnagram(String s, String t) {

        if(s.length() != t.length()) return false;
        if(s.equals(t)) return true;

        Map<Character, Integer> sMap = new HashMap<>();
        Map<Character, Integer> tMap = new HashMap<>();

        for(int i = 0; i < s.length(); i++) {
            sMap.merge(s.charAt(i), 1, Integer::sum);
            tMap.merge(t.charAt(i), 1, Integer::sum);
        }

        for(Character c : sMap.keySet()) {
            if(!sMap.get(c).equals(tMap.get(c))) return false;
        }
        return true;
    }
}