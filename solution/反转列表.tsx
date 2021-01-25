class ListNode<T = any> {
    val: T;
    next: ListNode | null;
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// 递归
function reserveList(head:ListNode):ListNode | null {
    if(head === null || head.next === null) return head;
    let last = reserveList(head.next);
    head.next.next = head;
    head.next = null;
    return last;
}

// 迭代    
function reserveList2(head:ListNode) {
    if(head === null || head.next === null) return head;
    let next = null, pre = null;
    while(head) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
}