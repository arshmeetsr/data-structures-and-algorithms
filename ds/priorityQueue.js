export default class PriorityQueue {
    constructor() {
        this.collection = [];
    }

    print() {
        console.log(this.collection);
    }

    isEmpty() {
        return this.collection.length === 0;
    }

    enqueue(item) {
        if (this.isEmpty()) {
            this.collection.push(item);
        } else {
            let added = false;
            for (let i = 0; i < this.collection.length; i++) {
                if (item[1] < this.collection[i][1]) {
                    this.collection.splice(i, 0, item);
                    added = true;
                    break;
                }
            }

            if (!added) {
                this.collection.push(item);
            }
        }
    }

    dequeue() {
        return this.collection.shift();
    }
}