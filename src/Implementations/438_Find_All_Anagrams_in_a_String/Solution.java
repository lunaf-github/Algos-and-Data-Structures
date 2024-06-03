import java.util.ArrayList;
import java.util.List;

public class Solution {

    // Best Solution - Sliding Window w/ Character Frequency (Array)
    public List<Integer> findAnagrams(String s, String p) {
        int[] freqCounter = new int[26];
        List<Integer> res = new ArrayList<>();

        for (char ch : p.toCharArray()) {
            freqCounter[ch - 'a']++;
        }

        int left = 0;
        for (int right = 0; right < s.length(); right++) {
            freqCounter[s.charAt(right) - 'a']--;

            while (freqCounter[s.charAt(right) - 'a'] < 0) {
                freqCounter[s.charAt(left) - 'a']++;
                left++;
            }

            if (right - left + 1 == p.length()) {
                res.add(left);
            }
        }

        return res;
    }

}
