
function createDebounceFunction(callback, timeout) {

    let timer;
    return (...args) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback.apply(this, args);
        }, timeout);
    };
}


const log100 = () => {
    console.log(100);
    console.timeEnd('debounceLog100');
}
const debounceLog100 = createDebounceFunction(log100, 1000);

debounceLog100();
console.time('debounceLog100');
setTimeout(debounceLog100, 200); 
setTimeout(debounceLog100, 400); 

