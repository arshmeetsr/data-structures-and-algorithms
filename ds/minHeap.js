export class MinHeap {
    constructor() {
        this.heap = [];
    }

    left(node) {
        return (2 * node) + 1;
    }

    right(node) {
        return (2 * node) + 2;
    }

    parent(node) {
        return (node - 1) / 2;
    }

    insert(data) {
        this.heap.push(data);
        const index = this.heap.length - 1;
        while(index > 0 && this.heap[index] < this.heap[this.parent(index)]) {
            const temp = this.heap[this.parent(index)];
            this.heap[this.parent(index)] = this.heap[i];
            this.heap[i] = temp;
            index = this.parent(index);
        }
    }
}