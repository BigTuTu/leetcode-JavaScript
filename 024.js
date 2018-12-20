/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 
 * 使用3个指针进行两两交换，分别是前指针（pre）,当前指针（cur）,后指针（next）
pre的作用是在cur与next交换后进行连接，防止断链;while循环
 */
var swapPairs = function(head) {
    var tempHead = new ListNode(0);
    tempHead.next = head;
    var pre = tempHead;
    var cur = pre.next;
    var next;

    while (cur !== null && cur.next !== null) {
        next = cur.next;
        cur.next = next.next;
        pre.next = next;
        next.next = cur;
        pre = cur;
        cur = pre.next;
    }
    return tempHead.next;
};