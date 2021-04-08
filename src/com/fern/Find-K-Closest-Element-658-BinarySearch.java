/*
Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array.
The result should also be sorted in ascending order.

An integer a is closer to x than an integer b if:

|a - x| < |b - x|, or
|a - x| == |b - x| and a < b

 */

//Binary search.

class Solution {
    public List<Integer> findClosestElements(int[] arr, int k, int x) {

        //Left equals to the first indes of the Array.
        // Right equals to the last index of the Array
        int left = 0;
        int right = arr.length-1;

        //Loop while the difference beteen the left and right is equal or greater than k. We want to end up with
        //an array of K length because they will be the k closest elements to x.

        while (right - left >= k){

            //if the distance between the left index and x is greater than the distance between the right index and x.
            //Then, that means that the right index is closer. So, move the left index one unit the right.
            //Else, the left index is closer, so we move the right index one unit to the left.
            if(Math.abs(arr[left] - x) > Math.abs(arr[right] - x)){
                left++;
            }else{
                right--;
            }
        }

        //After the while loop is done, create a new ArrayList.
        //Loop through the array, starting from the new left index and ending to the new right index.
        //We add each element withing these two indexs to the new ArrayList.

                List<Integer> ans = new ArrayList<>(k);
        for ( int i = left; i <= right; i++ ){
            ans.add(arr[i]);
        }

        return ans;
    }
}