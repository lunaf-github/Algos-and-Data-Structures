class Solution {
    public int[] twoSum(int[] numbers, int target) {
        // seen hashSet
        HashMap<Integer, Integer> seen = new HashMap<>();

        // iterate
        for(int i = 0; i < numbers.length; i++){
            // target minus number should equal missing number
            int missingNum = target - numbers[i];
            // check if missing number is in the seen hashmap
            if(seen.containsKey(missingNum)){
                // if yes, then return array of index 1 and index2
                return new int[]{seen.get(missingNum), i + 1};
            }
            // add current number to seen
            seen.put(numbers[i], i + 1);
        }

        return new int[0];

    }
}