let arr = [1, 2, 3];
let spreadArr = [...arr, 4, 5, 6];
console.log(spreadArr);
function restFunction(arr1, ...arr2) {
    console.log(arr1);
    console.log(arr2);
}
restFunction("Hello world!", 1, 2, 3, 4, 5);

function averageRest(...numbers) {
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum / numbers.length;
}

console.log(averageRest(10, 20, 30, 40, 50));

function typeOfFunction(value) {
    return typeof value;
}

console.log(typeOfFunction("Hello, world!"));
console.log(typeOfFunction(42));
console.log(typeOfFunction(true));

function stringOrNumber(value) {
    if (typeof value === "string") {
        return "Це рядок.";
    } else if (typeof value === "number") {
        return "Це число.";
    } else {
        return "Це інший тип.";
    }
}

console.log(stringOrNumber("Hello, world!"));
console.log(stringOrNumber(42));
console.log(stringOrNumber(true));