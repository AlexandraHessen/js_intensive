"use strict";
class Queue {
    constructor() {
        this.queue = [];
        this.length = 0;
        this.startIndex = 0;
        this.endIndex = -1;
    }


    enqueue(item) {
        this.endIndex++
        this.queue[this.endIndex] = item;
        this.length++
    }


    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }

        const deleteElement = this.queue[this.startIndex];
        this.queue[this.startIndex] = null;
        this.startIndex++
        this.length--
        return deleteElement;

    }


    front() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.queue[this.startIndex];
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
console.log(queue); // queue = [10, 20, 30, 40]

queue.dequeue();
queue.dequeue();
console.log(queue); // queue = [null, null, 30, 40]
console.log(queue.front()); //30
console.log(queue.isEmpty()); //false
console.log(queue.size()); //2
