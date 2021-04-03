export default class Set {
    constructor() {
        this.storage = [];
    }

    print() {
        console.log(this.storage);
    }

    has(item) {
        return this.storage.includes(item);
    }

    add(item) {
        if (this.has(item)) return;
        this.storage.push(item);
    }

    remove(item) {
        const index = this.storage.indexOf(item);
        this.storage.splice(index, 1);
    }
}