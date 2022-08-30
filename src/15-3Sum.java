// time complexity: O(n)
// space coplexity: O(n), because of the result arrayList

class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        // sort nums array
        Arrays.sort(nums);
        // create a result Arraylist
        List<List<Integer>> result = new ArrayList<>();
        // iterate through the nums array
        for(int i = 0; i < nums.length - 1; i++){
            if(i == 0 || nums[i] != nums[i - 1]){
                // create variable sum and set equal to 0 - nums[k]; (0 - nums[k] = nums[j] + nums[j] )
                int sum = 0 - nums[i];
                // set left pointer to ith + 1 index
                int left =  i + 1;
                // set right pointer to last index of nums
                int right = nums.length - 1;
                // iterate until left pointer reaches right pointer
                while(left < right){
                    //if number at the left index plus number at the right index is equal to sum
                    if(nums[left] + nums[right] == sum){
                        // add values at i, left, and right to a new ArrayLIst and add it to the result ArrayList
                        result.add(new ArrayList<Integer>(Arrays.asList(nums[i], nums[left], nums[right])));
                        // check for duplicates on both left and right sides
                        while(left < right && nums[left] == nums[left + 1]) left++;
                        while(left < right && nums[right] == nums[right - 1]) right--;
                        left++;
                        right--;
                    }else{

                        // if left value plus right value is less than sum, move left to the right
                        if(nums[left] + nums[right] < sum) left++;

                            // else move right to the left
                        else right--;

                    }

                }
                // left++;
                // right--;
            }
        }
        // return result
        return result;
    }
}