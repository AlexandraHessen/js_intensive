class Queue {
    constructor() {
        this.queue = [];
        this.size = 0;
        this.startIndex = 0;
        this.endIndex = -1;
    }
    enqueue(item) {
        this.endIndex++
        this.queue[this.endIndex] = item;
        this.size++
    }
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }

        const deleteElement = this.queue[this.startIndex];
        this.queue[this.startIndex] = null;
        this.startIndex++
        this.size--
        return deleteElement;

    }

    peek() {
        return this.stack[this.size - 1]
    }

    front() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.queue[this.startIndex];
    }

    isEmpty() {
        return this.size === 0;
    }

    size() {
        return this.size;
    }
}
