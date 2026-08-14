let options = ["Камінь", "Папір", "Ножиці"];
let computerAnswer = options[Math.floor(Math.random() * options.length)];
let userAnswer = prompt("Введіть ваш вибір: Камінь, Папір або Ножиці");

while(true) {
if (userAnswer.toLowerCase() === computerAnswer) {
    alert("Нічия! Обидва вибрали: " + computerAnswer);
    continue;
} 

if ((userAnswer.toLowerCase() === "камінь" && computerAnswer === "ножиці") ||
           (userAnswer.toLowerCase() === "папір" && computerAnswer === "камінь") ||
           (userAnswer.toLowerCase() === "ножиці" && computerAnswer === "папір")) {
    alert("Ви виграли! Ваш вибір: " + userAnswer + ", Комп'ютер вибрав: " + computerAnswer);
} else {
    alert("Ви програли! Ваш вибір: " + userAnswer + ", Комп'ютер вибрав: " + computerAnswer);
}
break;
}

function checkNumberMin(a, b) {
    return Math.min(a, b);
}
    let number1 = Number(prompt("Введіть перше число:"));
    let number2 = Number(prompt("Введіть друге число:"));
    console.log("Мінімальне число: " + checkNumberMin(number1, number2));
function checkNumberMax(a, b) {
    return Math.max(a, b);
}
    let number3 = Number(prompt("Введіть перше число:"));
    let number4 = Number(prompt("Введіть друге число:"));
    console.log("Максимальне число: " + checkNumberMax(number3, number4));
function numberToPower(a, b) {
    return Math.pow(a, b);
}
    let number = Number(prompt("Введіть число:"));
    let power = Number(prompt("Введіть ступінь:"));
    console.log("Результат піднесення до степеня: " + numberToPower(number, power));
function numberFloor(a) {
    return Math.floor(a);
}
    let number5 = Math.floor(Math.random() * 10);
    console.log("Округлене число вниз: " + numberFloor(number5));
function numberCeil(a) {
    return Math.ceil(a);
}
let number6 = Math.ceil(Math.random() * 10);
console.log("Округлене число вгору: " + numberCeil(number6));
function getYear(age, date, year) {
    return year;
}
    let age1 = Number(prompt("Введіть ваш вік:"));
    let date1 = new Date();
    let year = date1.getFullYear() - age1;
    console.log("Рік народження: " + getYear(age1, date1, year));
const currentDate = new Date();
const formattedDate = currentDate.toLocaleString();
console.log(formattedDate);

const text = "hello world javascript";
const words = text.split(" ");
const upperWords = words.map(word => word.toUpperCase());
console.log(upperWords);