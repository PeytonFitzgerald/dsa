/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * https://leetcode.com/problems/add-two-numbers/description/
 */


class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummyHead = new ListNode(0);
    let p = l1, q = l2, curr = dummyHead;
    let carry = 0;

    while (p || q) {
        let l1val = p ? p.val : 0;
        let l2val = q ? q.val : 0;
        let sum = carry + l1val + l2val;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10)
        curr = curr.next


        if (p) {
            p = p.next
        }
        if (q) {
            q = q.next
        }
    }

    if (carry > 0) {
        curr.next = new ListNode(carry)
    }
    return dummyHead.next;


};