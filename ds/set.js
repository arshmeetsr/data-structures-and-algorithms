export default class Set {
    constructor() {
        this.collection = [];
    }

    print() {
        console.log(this.collection);
    }

    has(item) {
        return this.collection.includes(item);
    }

    add(item) {
        if (this.has(item)) return;
        this.collection.push(item);
    }

    remove(item) {
        const index = this.collection.indexOf(item);
        this.collection.splice(index, 1);
    }
}