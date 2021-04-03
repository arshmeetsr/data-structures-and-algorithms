export default class PriorityQueue {
    constructor() {
        this.storage = [];
    }

    print() {
        console.log(this.storage);
    }

    isEmpty() {
        return this.storage.length === 0;
    }

    enqueue(item) {
        if (this.isEmpty()) {
            this.storage.push(item);
        } else {
            let added = false;
            for (let i = 0; i < this.storage.length; i++) {
                if (item[1] < this.storage[i][1]) {
                    this.storage.splice(i, 0, item);
                    added = true;
                    break;
                }
            }

            if (!added) {
                this.storage.push(item);
            }
        }
    }

    dequeue() {
        return this.storage.shift();
    }
}