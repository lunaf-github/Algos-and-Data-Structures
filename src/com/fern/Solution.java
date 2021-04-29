import java.util.*;
class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        //create a HashSet. This will be used to filter out duplicates before return it as the result array.
        //The HashSet will collect all intersecting elements (Elements that both arrays have in common)
        Set<Integer> set = new HashSet<Integer>();

        //sort nums2 in ascending order. We will use this array for our binarySearch.
        Arrays.sort(nums2);

        //iterate through nums1 and check if any elements intersect with nums2. BinarySearch will be used.
        for(int element: nums1){
            //if an element in nums 1 intersects with nums 2, then add it to the Hashset.
            if(binarySearch(nums2,element)){
                set.add(element);
            }
        }

        //Create the results array with the same size of the HashSet.
        int[] res = new int[set.size()];
        int i = 0;

        //transfer elements from the HashSet to the results array
        for( int num: set){
            res[i++] = num;
        }

        return res;

    }

    // Template 1 binary search.
    private static boolean binarySearch(int[] array, int target){
        int lo = 0;
        int hi = array.length - 1;

        // we use <= because if lo and hi end up equal, it will not run the while loop.

        while (lo <= hi){
            int mid = lo + (hi - lo)/2;
            if(array[mid] == target) return true;

            //we add 1 and subtract 1 because the while loop condition is <=. If lo = hi, mid will equal lo and will end up as an infinit loop.
            if(array[mid] < target) lo = mid + 1 ;
            else hi = mid - 1 ;
        }

        return false;

    }
//    private void printList(List[])
    public static void main(String[] args){

        Solution solu = new Solution();
//        Public int [] solu(int[] nums1, int[] nums2){
        int[] nums1 = new int[]{1,2,3,4,1};
        int[] nums2 = new int[]{2,3};
       int[] res = solu.intersection(nums1,nums2);
        for(Integer x: res ){
            System.out.println(x);
        }

//            int solution = intersection(nums1,nums2);
//            return solution
        }

}


