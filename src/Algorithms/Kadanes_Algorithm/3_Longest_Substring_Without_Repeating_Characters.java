class Solution {
    public int lengthOfLongestSubstring(String s) {
        int longestSubstring = 0;
        int[] freqCounter = new int[26];

        for (char ch : s.toCharArray()) {
            freqCounter[ch - 'a'] = 1;
        }

        int left = 0;
        for (int right = 0; right < s.length(); right++) {

            freqCounter[s.charAt(right) - 'a']--;

            while (freqCounter[s.charAt(right) - 'a'] < 0) {
                freqCounter[s.charAt(left) - 'a']++;
                left++;
            }

            longestSubstring = Math.max(longestSubstring, right - left + 1);
        }

        return longestSubstring;
    }
}