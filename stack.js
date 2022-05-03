"use strict";
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


let testStack = new Stack();
testStack.push(10);
testStack.push(20);
testStack.push(30);
testStack.push(40);
console.log(testStack); // testStack = [10, 20, 30, 40]

console.log(testStack.pop()); //40
console.log(testStack.pop()); //30
console.log(testStack); // testStack = [10, 20]

console.log(testStack.peek()); //20
console.log(testStack.length()); //2
