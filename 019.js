/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * 
 * 
 * 两边扫描
var removeNthFromEnd = function(head, n) {
    var dummy = new ListNode(0);
    dummy.next = head;
    var length = 0;
    var first = head;
    while (first != null) {
        length++;
        first = first.next;
    }
    length = length - n;
    first = dummy;
    while (length > 0) {
        length--;
        first = first.next;
    }
    first.next = first.next.next;
    return dummy.next;
};
*/

//一次遍历算法，第一个指针A从列表的开头向前移动 n+1 步，而第二个指针B将从列表的开头出发，A到链尾的距离和B到要删除节点距离相等。

var removeNthFromEnd = function(head, n) {
    var dummy = new ListNode(0);
    dummy.next = head;
    var first = dummy,
        second = dummy;
    for (i = 1; i < n + 2; i++) {
        first = first.next;
    }
    while (first !== null) { //找到要删除节点的位置
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return dummy.next;
};