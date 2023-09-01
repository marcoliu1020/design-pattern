class ListNode {
    val: number
    next: ListNode | null

    constructor(val: number) {
        this.val = val
        this.next = null
    }
}


class LinkedList {
    head: ListNode

    constructor(head: ListNode) {
        this.head = head
    }

    [Symbol.iterator]() {
        let node: ListNode | null = this.head

        return {
            next() {
                if (!node) return { value: undefined, done: true }
                const val = node.val
                node = node.next
                return { value: val, done: false }
            }
        }
    }
}

// Initialize LinkedList
const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)

const myList = new LinkedList(head)

// Iterate through LinkedList
for(let node of myList) {
    console.log(node)
}
