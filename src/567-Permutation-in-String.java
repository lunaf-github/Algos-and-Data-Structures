class Solution {
    public boolean checkInclusion(String s1, String s2) {
        HashMap<Character, Integer> charCount = new HashMap<>();

        for(char ch: s1.toCharArray()){
            charCount.put(ch, charCount.getOrDefault(ch,0) + 1);
        }

        int left = 0;
        int matched = 0;

        for(int right = 0; right < s2.length(); right++){
            char rightChar = s2.charAt(right);
            if(charCount.containsKey(rightChar)){
                charCount.put(rightChar, charCount.get(rightChar) - 1);
                if(charCount.get(rightChar) == 0){
                    matched++;
                }
            }

            if(matched == charCount.size()) return true;

            if(right >= s1.length() - 1){
                char leftChar = s2.charAt(left++);
                if(charCount.containsKey(leftChar)){
                    if(charCount.get(leftChar) == 0){
                        matched--;
                    }
                    charCount.put(leftChar, charCount.get(leftChar) + 1);
                }
            }

        }

        return false;

    }
}