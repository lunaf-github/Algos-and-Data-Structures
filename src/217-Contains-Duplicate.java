// Time and space complexity: O(n)

// update: the set.add method returns false if the element we are trying to add already exists.
// So I used "not" operator to return true if the set.add() method returns a false.
// This way, I don't need the set.contains method which makes the solution much more efficient.

class Solution {
    public boolean containsDuplicate(int[] nums) {
        HashSet<Integer> set = new HashSet<>();
        for(int element: nums){
            if(!set.add(element)) return true;
        }
        return false;
    }
}