// use char at


class Solution {
    public int lengthOfLongestSubstring(String s) {
        Set<Character> chars = new HashSet<>();
        int left = 0;
        int right = 0;
        int maxSubstringLength = 0;

        while(right < s.length()){
            char rightVal = s.charAt(right);

            if(chars.contains(rightVal)){
                chars.remove(s.charAt(left));
                left++;
            }else{
                chars.add(rightVal);
                right++;
                maxSubstringLength = Math.max(chars.size(), maxSubstringLength);
            }
        }

        return maxSubstringLength;
    }
}