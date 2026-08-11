let numbers = [];

numbers.push(10);
numbers.push(20);
numbers.push(30);

console.log(numbers);

function addElement(array, element) {
    array.push(element);
}

let numbers1 = [1, 2, 3];

addElement(numbers1, 4);

console.log(numbers1);

let numbers2 = [10, 20, 30];

numbers2.pop();

console.log(numbers2);

function removeLast(array) {
    array.pop();
}

let numbers3 = [1, 2, 3];

removeLast(numbers3);

console.log(numbers3);

let numbers4 = [3, 4];

numbers4.unshift(2);
numbers4.unshift(1);

console.log(numbers4);

function addToStart(array, element) {
    array.unshift(element);
}

let numbers5 = [2, 3, 4];

addToStart(numbers5, 1);

console.log(numbers5);

let numbers6 = [1, 2, 3, 4];

numbers6.shift();

console.log(numbers6);

function removeFirst(array) {
    array.shift();
}

let numbers7 = [10, 20, 30];

removeFirst(numbers7);

console.log(numbers7);

let numbers8 = new Array(5);

numbers8.fill(0);

console.log(numbers8);

function fillArray(array, value, start, end) {
    array.fill(value, start, end);
}

let numbers9 = [1, 2, 3, 4, 5];

fillArray(numbers9, 0, 1, 4);

console.log(numbers9);

let numbers10 = [1, 2, 3, 4, 5];

numbers10.splice(1, 2);

console.log(numbers10);

function removeElements(array, index, count) {
    array.splice(index, count);
}

let numbers11 = [10, 20, 30, 40, 50];

removeElements(numbers11, 1, 2);

console.log(numbers11);

let numbers12 = [1, 2, 3, 4, 5];

numbers12.reverse();

console.log(numbers12);

function reverseArray(array) {
    array.reverse();
}

let numbers13 = [1, 2, 3];

reverseArray(numbers13);

console.log(numbers13);

let numbers25 = [1, 2, 3];
let numbers26 = [4, 5, 6];

let result = numbers25.concat(numbers26);

console.log(result);

function combineArrays(array1, array2) {
    return array1.concat(array2);
}

let numbers14 = [1, 2];
let numbers24 = [3, 4];

let result1 = combineArrays(numbers14, numbers24);

console.log(result1);

let fruits = ["apple", "banana", "orange"];

console.log(fruits.includes("banana"));
console.log(fruits.includes("kiwi"));

function checkElement(array, element) {
    return array.includes(element);
}

let numbers15 = [1, 2, 3, 4];

console.log(checkElement(numbers15, 3));
console.log(checkElement(numbers15, 10));

let numbers16 = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers16.filter(function(number) {
    return number % 2 === 0;
});

console.log(evenNumbers);

function filterArray(array, condition) {
    return array.filter(condition);
}

function isEven(number) {
    return number % 2 === 0;
}

let numbers17 = [1, 2, 3, 4, 5, 6];

let result2 = filterArray(numbers17, isEven);

console.log(result2);

let numbers18 = [1, 2, 3, 4, 5];

let squares = numbers18.map(function(number) {
    return number * number;
});

console.log(squares);

function transformArray(array, transformer) {
    return array.map(transformer);
}

function addText(number) {
    return `Число: ${number}`;
}

let numbers19 = [1, 2, 3];

let result3 = transformArray(numbers19, addText);

console.log(result3);