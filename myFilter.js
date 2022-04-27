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

