import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<Integer> majorityElement(int[] nums) {
        List<Integer> res = new ArrayList<>();

        int vote1 = 0;
        int vote2 = 0;

        int candidate1 = 0;
        int candidate2 = 1;

        for (int num : nums) {
            if (num == candidate1) {
                vote1++;
            } else if (num == candidate2) {
                vote2++;
            } else if (vote1 == 0) {
                vote1 = 1;
                candidate1 = num;
            } else if (vote2 == 0) {
                vote2 = 1;
                candidate2 = num;
            } else {
                vote1--;
                vote2--;
            }
        }

        vote1 = 0;
        vote2 = 0;

        for (int num : nums) {
            if (num == candidate1) {
                vote1++;
            } else if (num == candidate2) {
                vote2++;
            }
        }

        if (vote1 > nums.length / 3) {
            res.add(candidate1);
        }

        if (vote2 > nums.length / 3) {
            res.add(candidate2);
        }

        return res;
    }
}