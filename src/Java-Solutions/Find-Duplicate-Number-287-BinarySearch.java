/*
Approach 1:
We will use binary search and the Pigeonhole Principle. If we have n number of containers and m number of items.
If m>n, then there is more than one item in a cointainer. So, in this problem we will use a counter. If the number of
elements is less than or equal to the mid, then the duplicates must be on the right half. So we will move the left pointer to the right.
Otherwise, we move the right pointer to the left.

Template 2, Binary search

*/

class Solution {
    public int findDuplicate(int[] nums) {
        int left = 1;
        int right = nums.length - 1;

        while (left < right){
            int counter = 0;
            int mid = left + (right - left)/2;

            for (int i : nums) {
                if (i <= mid) counter ++;
            }
            if (counter <= mid) left = mid + 1;
            else right = mid;
        }
        return left;
    }
}


/*
 Approach 2:


 time complexity: O(n)
 space complexity: O(1)

 it's best to solve it as a LinkedList. Each node points to the node at index specified by it's value.
 for example, the first element is 1. So this node points at node at position one. Then, the node at position one
 points at the node at position 3.
 Then the node at position 3 points at the node at position 2.
 then the node at position 2 points at the node at position 4.
 Then the node at position 4 points at the node at position 2.
 This becomes a loop. So it's a looped linked list and it can follow floyd's agorithm. (see explanation below)

1-3-2
   [ ]
    4
*/
class Solution {
    public int findDuplicate(int[] nums) {
        int slow = nums[0];
        int fast = nums[nums[0]];
// loop until fast and slow pointer meets. This is the part where both pointers meet at p = x distance. (see explaination below)
        while(slow != fast){
            slow = nums[slow];
            fast = nums[nums[fast]];
        }

        int slow2 = 0;
// since we know that p = x. We transverse the linked list again. One pointer starts at the beginning of the linkedlist and
// the other starts at distance x.
// slow2 travels p distance
// slow travels x distance
// both pointers will meet at the start of the cycle. which is the duplicate of our array.

        while(slow != slow2){
            slow = nums[slow];
            slow2 = nums[slow2];
        }

        return slow;

    }
}

// this problem was solved using Floyd's agoritm.
// fast pointer travels twice as fast as slow pointer ( f = 2s)
// distance traveled by fast will be twice the distance of slow and fast pointer will intersect with slow pointer

// p = distance before loop starts
// c = distance of loop
// x = distance where fast and slow pointer will meet. Distance is taken backwards, starting from the end of loop (intersection)
// fast pointer travels: p + c + (c -x). It travels though the non loop portion of the list then cycles once and lastly, it stops x distance
//                        before it complets it's second loop
// slow pointer travels: p + (c - x). It travels through non loop portion then almost completes a loop but stops when the fast pointer
//                       meets the slow pointer. It sloops x distance before it could complete the loop.

// using the f = 2s speed formula. We plug in the distances that both fast and slow pointer traveled.
//                  p = 2s
//    p + c + (c - x) = 2 (p + (c - x))
//         p + 2c - x = 2p + 2c - 2x
//                  0 = p - x
//                  x = p


