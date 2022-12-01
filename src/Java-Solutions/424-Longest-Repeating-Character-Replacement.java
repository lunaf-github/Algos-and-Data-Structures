class Solution {
    public int characterReplacement(String s, int k) {
        int start = 0;
        int max = 0;
        int[] count = new int[128];

        for(int end = 0; end < s.length(); end++){
            max = Math.max(max, ++count[s.charAt(end)]);

            if(max + k <= end - start){
                count[s.charAt(start++)]--;
            }

        }

        return s.length() - start;
    }
}