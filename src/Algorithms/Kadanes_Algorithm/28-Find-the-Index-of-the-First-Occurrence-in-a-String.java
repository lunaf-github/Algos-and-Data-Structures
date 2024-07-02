class Solution {

    public int strStr(String haystack, String needle) {
        int[] freqCounter = new int[26];

        for (int i = 0; i < needle.length(); i++) {
            freqCounter[needle.charAt(i) - "a".charAt(0)]++;
        }

        int left = 0;

        for (int right = 0; right < haystack.length(); right++) {

            freqCounter[haystack.charAt(right) - "a".charAt(0)]--;

            while (freqCounter[haystack.charAt(right) - "a".charAt(0)] < 0) {
                freqCounter[haystack.charAt(left) - "a".charAt(0)]++;
                left++;
            }

            if (right - left + 1 == needle.length())
                return left;
        }

        return -1;
    }

    public int strStrV2(String haystack, String needle) {

        if (needle == "")
            return 0;

        char[] needleArr = needle.toCharArray();
        char[] haystackArr = haystack.toCharArray();

        for (int left = 0; left <= haystackArr.length - needleArr.length; left++) {
            int right = 0;
            while (right < needleArr.length && haystackArr[left + right] == needleArr[right]) {
                right++;
            }
            System.out.println(right);
            if (right == needleArr.length)
                return left;
        }

        return -1;
    }

}
