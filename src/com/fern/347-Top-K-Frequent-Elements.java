// given: Array of numbers, a k value
// output: An array of top k frequent elements
// constraints:  1 <= nums.length <= 10^5;

// test cases: nums = null; nums.length == 0; k > unique.values; nums.length ==1

// time and space complexity: O(n)

class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        HashMap <Integer, Integer> freqMap = new HashMap <>();

        // populate the frequency map
        for(int num: nums){
            freqMap.put(num, freqMap.getOrDefault(num,0) + 1);
        }

        // create a list of frequencies
        List<Integer>[] buckets = new ArrayList[nums.length + 1];

        // populate the buckets with values that contain the same frequencies
        for(int value: freqMap.keySet()){
            if(buckets[freqMap.get(value)] == null) buckets[freqMap.get(value)] = new ArrayList<>();
            buckets[freqMap.get(value)].add(value);
        }

        // create result array
        int[] res = new int[Math.min(k, freqMap.size())];
        int resIndex = 0;

        // populate the res array, starting with elements with the highest frequency
        for(int i = buckets.length - 1; i >= 0; i--){
            if(buckets[i] == null) continue;
            for(int element : buckets[i]){
                if(resIndex == res.length) return res;
                res[resIndex++] = element;
            }
        }

        return res;
    }


}