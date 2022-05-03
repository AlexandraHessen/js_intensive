"use strict";
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }


    size() {
        return this.length;
    }


    headList() {
        return this.head;
    }


    add(value) {
        let newNode = new Node(value);

        if (!this.head)
            this.head = newNode;
        else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = newNode;
        }
        this.length++;
    }


    remove(value) {
        let current = this.head;
        let previous = null;

        while (current != null) {
            if (current.value === value) {
                if (previous == null) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }
                this.length--;
                return current.value;
            }
            previous = current;
            current = current.next;
        }
        return null;
    }


    indexOf(value) {
        let count = 0;
        let current = this.head;

        while (current != null) {
            if (current.value === value)
                return count;
            count++;
            current = current.next;
        }

        return -1;
    }


    elementAt(position) {
        if (position < 0 || position >= this.length) {
            return null;
        }

        let current = this.head;
        let index = 0;

        while (index < position) {
            current = current.next;
            index++;
        }

        return current.value;
    }


    addAt(value, position) {
        if (position < 0 || position > this.length) {
            return null;
        }

        let newNode = new Node(value);

        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            let previous = null;
            let index = 0;

            while (index < position) {
                previous = current;
                current = current.next;
                index++;
            }

            previous.next = newNode;
            newNode.next = current;
        }

        this.length++;
    }


    removeAt(position) {
        if (position < 0 || position >= this.length)
            return null;
        else {
            let current = this.head;
            let previous = current;
            let index = 0;

            if (position === 0) {
                this.head = current.next;
            } else {

                while (index < position) {
                    index++;
                    previous = current;
                    current = current.next;
                }

                previous.next = current.next;
            }
            this.length--;

            return current.value;
        }
    }


}


let testLinkedList = new LinkedList();

testLinkedList.add(10);
testLinkedList.add(20);
testLinkedList.add(30);
testLinkedList.add(40);
testLinkedList.add(50);
console.log(testLinkedList);
console.log(testLinkedList.size()); //5
console.log(testLinkedList.headList()); //value: 10, next: Node

console.log(testLinkedList.remove(10)); //10
console.log(testLinkedList.size()); //4
// testLinkedList 20 30 40 50 
console.log(testLinkedList.indexOf(30)); //1
console.log(testLinkedList.elementAt(1)); //30
testLinkedList.addAt(60, 2);
console.log(testLinkedList); //20 30 60 40 50 
console.log(testLinkedList.size()); //5

testLinkedList.removeAt(3);
console.log(testLinkedList); //20 30 60 50 


