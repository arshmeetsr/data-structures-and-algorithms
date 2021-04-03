class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
export default class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    insertAtFront(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
}