class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export default class BST {
    constructor() {
        this.root = null;
    }

    inorder() {
        this.inorderUtil(this.root);
    }

    inorderUtil(root) {
        if (!root) return;
        this.inorderUtil(root.left);
        console.log(root.data);
        this.inorderUtil(root.right);
    }

    insert(data) {
        this.root = this.insertUtil(this.root, data);
    }

    insertUtil(root, data) {
        if (!root) {
            const newNode = new Node(data);
            return newNode;
        } else if (data < root.data) {
            root.left = this.insertUtil(root.left, data);
        } else {
            root.right = this.insertUtil(root.right, data);
        }
        return root;
    }
}