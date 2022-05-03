"use strict";
Array.prototype.myFilter = function (callback, thisArg) {
    if (!(Array.isArray(this))) {
        throw new Error("Невалидное значение массива!")
    };

    if (typeof callback !== "function") {
        throw Error("Невалидное значение функции!")
    };

    let resultArr = [];

    for (let i = 0; i < this.length; i++) {
        if (callback.call(thisArg, this[i], i, arr)) {
            resultArr.push(this[i])
        }
    }

    return resultArr;
}



//check
const arr = [1, -9, 0, 11];

function callbackToCheck(num) {
    return num > 0;
}

console.log(arr.myFilter(callbackToCheck)); //[1, 11]


const data = [8, "44", "red", 11, 58, 145, 6];
const range = {
    lower: 0,
    upper: 100
};

function isInRange(value) {
    if (typeof value !== 'number') {
        return false;
    }
    return value >= this.lower && value <= this.upper;
}

const numberInRange = data.myFilter(isInRange, range);
console.log(numberInRange); // [8, 11, 58, 6]