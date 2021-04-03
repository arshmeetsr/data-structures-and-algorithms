import Queue from './queue.js';

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
export default class BinaryTree {
    constructor() {
        this.root = null;
    }

    inorder() {
        this.inorderUtil(this.root);
    }

    inorderUtil(root) {
        if(root === null) return;
        this.inorderUtil(root.left);
        console.log(root.data);
        this.inorderUtil(root.right);
    }

    insert(item) {
        const newNode = new Node(item);
        if(this.root === null) {
            this.root = newNode;
            return;
        }
        const q = new Queue();
        q.enqueue(this.root);
        while(!q.isEmpty()) {
            const currentNode = q.dequeue();
            if(currentNode.left !== null) {
                q.enqueue(currentNode.left);
            }
            if(currentNode.right !== null) {
                q.enqueue(currentNode.right);
            }
            if(currentNode.left === null) {
                currentNode.left = newNode;
                return;
            }
            if(currentNode.right === null) {
                currentNode.right = newNode;
                return;
            }
        }
    }

    delete(item) {
        if(this.root === null) {
            console.log('Tree empty');
            return;
        }
        let q;
        q  = new Queue();
        const nodeToBeDeleted = null;
        const lastNode = null;

        q.enqueue(this.root);
        while(!q.isEmpty()) {
            const currentNode = q.dequeue();
            if(currentNode.data === item) {
                nodeToBeDeleted = currentNode;
            }
            if(q.isEmpty()) {
                lastNode = currentNode;
            }
        }
        if(nodeToBeDeleted === null) {
            console.log('Node not found');
            return;
        }
        nodeToBeDeleted.data = lastNode.data;
        q  = new Queue();
        while(!q.isEmpty()) {
            const currentNode = q.dequeue();
            if(currentNode === )
        }
    }
}