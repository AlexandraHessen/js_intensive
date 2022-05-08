"use strict";

class Calculator {
    #x;
    #y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    set x(value) {
        if (typeof (value) !== "number") throw new Error("Невалидное число!");

        this.#x = value;
    }

    get x() {
        return this.#x;
    }

    set y(value) {
        if (typeof (value) !== "number") throw new Error("Невалидное число!");
        this.#y= value;
    }

    get y() {
        return this.#y;

    }

    setX(num) {
        if (typeof (num) !== "number") throw new Error("Невалидное число!");
        this.#x = num;
    }

    setY(num) {
        if (typeof (num) !== "number") throw new Error("Невалидное число!")
        this.#y = num;
    }

    #logSum() {
        console.log(this.#x + this.#y);
    }

    #logMul() {
        console.log(this.#x * this.#y);
    }

    #logSub() {
        console.log(this.#x - this.#y);
    }

    #logDiv() {
        if (this.#y === 0) throw new Error("Второе число не может быть равно 0!");
        console.log(this.#x / this.#y);

    }
}



