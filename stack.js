class Stack {
    constructor() {
        this.stack = [];
        this.size = 0;
    }
    push(item) {
        this.stack[this.size] = item;
        this.size++
    }
    pop() {
        if (this.size === 0) {
            return undefined;
        }

        --this.size;
        let deleteElement = this.stack[this.size];
        this.stack.length = this.size;
        return deleteElement;
    }

    peek() {
        return this.stack[this.size - 1];
    }

    length() {
        return this.size;
    }
}
