"use strict";

class Calculator {
    #num1;
    #num2;

    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    set num1(value) {
        if (typeof (value) !== "number") throw new Error("Невалидное число!");

        this.#num1 = value;
    }

    get num1() {
        return this.#num1;
    }

    set num2(value) {
        if (typeof (value) !== "number") throw new Error("Невалидное число!");
        this.#num2= value;
    }

    get num2() {
        return this.#num2;

    }

    setX(num) {
        if (typeof (num) !== "number") throw new Error("Невалидное число!");
        this.#num1 = num;
    }

    setY(num) {
        if (typeof (num) !== "number") throw new Error("Невалидное число!")
        this.#num2 = num;
    }

    #logSum() {
        console.log(this.#num1 + this.#num2);
    }

    #logMul() {
        console.log(this.#num1 * this.#num2);
    }

    #logSub() {
        console.log(this.#num1 - this.#num2);
    }

    #logDiv() {
        if (this.#num2 === 0) throw new Error("Второе число не может быть равно 0!");
        console.log(this.#num1 / this.#num2);

    }
}



