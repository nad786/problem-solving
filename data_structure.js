//leetcode 234 Palindrome Linked List


//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head = new ListNode()) {

    let startNode = lastNode = head;
    // 2,1,3,1
    const temp = [head.val];
    while (head.next) {
        if (!lastNode.next) {
            if (temp.pop() != head.val) {
                return false;
            }
        } else {
            startNode = startNode.next;
            temp.push(startNode.val);
            lastNode = lastNode.next;
            if (lastNode.next) {
                lastNode = lastNode.next;
            } else {
                temp.pop();
            }
        }
        head = head.next;
    }
    return temp[0] == head.val;
};
let list = new ListNode(2);
list.next = new ListNode(1);
list.next.next = new ListNode(1);
list.next.next.next = new ListNode(2);