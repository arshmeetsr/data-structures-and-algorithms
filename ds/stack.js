export default class Stack {
    constructor() {
        this.storage = [];
    }

    print() {
        console.log(this.storage);
    }

    isEmpty() {
        return this.storage.length === 0;
    }

    push(data) {
        this.storage.push(data);
    }

    pop() {
        return this.storage.pop();;
    }
}
