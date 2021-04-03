export default class Queue {
    constructor() {
        this.storage = [];
    }

    print() {
        console.log(this.storage);
    }

    isEmpty() {
        return this.storage.length === 0;
    }

    enqueue(data) {
        this.storage.push(data);
    }

    dequeue() {
        return this.storage.shift();
    }
}