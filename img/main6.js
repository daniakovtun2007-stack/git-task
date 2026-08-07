function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let operation = prompt("Введіть операцію (+, -, *, /):");
let number1 = Number(prompt("Введіть перше число:"));
let number2 = Number(prompt("Введіть друге число:"));

switch (operation) {
    case "+":
        console.log(sum(number1, number2));
        break;

    case "-":
        console.log(subtract(number1, number2));
        break;

    case "*":
        console.log(multiply(number1, number2));
        break;

    case "/":
        console.log(divide(number1, number2));
        break;

    default:
        console.log("Невідома операція");
}
let users = ["Danya", "Alex", "John"];

function hiUser(user) {
    console.log(`Вітаю ${user}`);
}

function welcomeUser(users, callback) {
    for (let user of users) {
        callback(user);
    }
}

welcomeUser(users, hiUser);

const hiUser1 = (user) => {
    console.log(`Вітаю ${user}`);
};

const welcomeUser1 = (users, callback) => {
    for (let user of users) {
        callback(user);
    }
};

let users1 = ["Danya", "Alex", "John"];

welcomeUser1(users1, hiUser1);

function sayHello(name = "Guest") {
    console.log(`Вітаю, ${name}`);
}

sayHello("Danya");
sayHello();

function processString(text, callback) {
    callback(text);
}
function printText(text) {
    console.log(text);
}
processString("Hello JavaScript", printText);


function multiplyValues(a, b, c) {
    return a * b * c;
}
console.log(multiplyValues(2, 3, 4));