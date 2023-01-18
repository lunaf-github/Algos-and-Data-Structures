// time complexity: O(n)
// space coplexity: O(1) if result array is not counted.

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



class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        int n = nums.length;
        List<List<Integer>> res = new ArrayList<>();
        Arrays.sort(nums);

        for(int i = 0; i < n - 2; i++){
            if(i > 0 && nums[i] == nums[i - 1]) continue;

            int j = i + 1;
            int k = n - 1;

            while(j < k){
                int sum = nums[i] + nums[j] + nums[k];

                if(sum > 0){
                    k--;
                }else if(sum < 0){
                    j++;
                }else{
                    res.add(new ArrayList<>(Arrays.asList(nums[i], nums[j], nums[k])));
                    while(j + 1 < n - 1 && nums[j] == nums[j + 1]) j++;
                    j++;
                }
            }
        }
        return res;
    }
}