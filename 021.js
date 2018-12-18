/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 用递归解决比较方便
 */
var mergeTwoLists = function(l1, l2) {
    //一定别忘了排除空链表的情况
    if (l1 == null) return l2;
    if (l2 == null) return l1;
    var head = new ListNode(0);
    if (l1.val <= l2.val) {
        head = l1;
        head.next = mergeTwoLists(l1.next, l2);
    } else {
        head = l2;
        head.next = mergeTwoLists(l2.next, l1)
    }
    return head;
};