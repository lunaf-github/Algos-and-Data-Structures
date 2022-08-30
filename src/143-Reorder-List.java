/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public void reorderList(ListNode head) {
        if(head == null || head.next==null) return;
//       p
//     h
//             f
//         s
//     1-2-3-4 null


        //1st step, split the list in two
        // use slow and faster pointers
        ListNode slow = head;
        ListNode fast = head;
        ListNode prev = null;
        ListNode l1 = head;

        while(fast != null && fast.next !=null){
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }

        prev.next = null;


        //2nd step, reverse the second list
        ListNode l2 = reverse(slow);

        //3rd step, merge both list in a zipper manner. list 1 node will go fist.
        merge(l1, l2);

    }


    // _____
    //     |   |
    // 3-2-1 4 null
    // |   p f
    // |     h
    // |     |
    // -------

// while pivot.next is not null
//  move frontier pointer to pivot.next
//  connect pivot to next.next node
//  frontier.next to head
//  head equal to frontiear

    public ListNode reverse(ListNode head){
        ListNode pivot = head;
        ListNode frontier = null;

        while(pivot.next != null){
            frontier = pivot.next;
            pivot.next = pivot.next.next;
            frontier.next = head;
            head = frontier;
        }

        return head;
    }


    //     l1
    //       n1
    // 1 2 3
    // |/|/|
    // 6 5 4
    //       n2
    //     l2


    public void merge(ListNode l1, ListNode l2){
        ListNode n1 = null;
        ListNode n2 = null;

        while(l1 != null && l2 != null){
            n1 = l1.next;
            n2 = l2.next;
            l1.next = l2;

            if(n1 == null) break;

            l2.next = n1;
            l1 = n1;
            l2 = n2;

        }
    }
}