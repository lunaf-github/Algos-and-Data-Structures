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
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode c1 = l1;
        ListNode c2 = l2;
        ListNode res = new ListNode(0);
        ListNode d = res;
        int sum = 0;


        while (c1 != null || c2 != null){

            //sum turns to 1 if sum is larger than 10 and 0 if sum is less than 10.
            sum /= 10;

            if (c1 != null){
                sum += c1.val;
                c1 = c1.next;
            }

            if (c2 != null){
                sum += c2.val;
                c2 = c2.next;
            }

            d.next = new ListNode(sum % 10);
            d = d.next;

        }

        if (sum/10 == 1 ) d.next = new ListNode(1);
        return res.next;

    }
}