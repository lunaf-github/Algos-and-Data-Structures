import java.util.Map;
import java.util.HashMap;

class Solution {
    public boolean checkInclusion(String s1, String s2) {
        if (s1.length() > s2.length())
            return false;

        Map<Character, Integer> freqMap = new HashMap<>();

        for (char ch : s1.toCharArray()) {
            freqMap.put(ch, freqMap.getOrDefault(ch, 0) + 1);
        }

        int left = 0;
        for (int right = 0; right < s2.length(); right++) {
            char rightChar = s2.charAt(right);

            if (freqMap.containsKey(rightChar)) {
                freqMap.put(rightChar, freqMap.get(rightChar) - 1);
            } else {
                while (left <= right) {
                    char leftChar = s2.charAt(left);
                    if (freqMap.containsKey(leftChar)) {
                        freqMap.put(leftChar, freqMap.get(leftChar) + 1);
                    }
                    left++;
                }
            }

            while (freqMap.containsKey(rightChar) && freqMap.get(rightChar) < 0) {
                char leftChar = s2.charAt(left);
                freqMap.put(leftChar, freqMap.get(leftChar) + 1);
                left++;
            }

            if (right - left + 1 == s1.length())
                return true;
        }

        return false;
    }
}
