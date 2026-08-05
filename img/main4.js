let number1 = Number(prompt("Введіть перше число:"));
let number2 = Number(prompt("Введіть друге число:"));
let number3 = Number(prompt("Введіть третє число:"));

if (number1 > number2 && number1 > number3) {
    console.log("Найбільше число:", number1);
} else if (number2 > number1 && number2 > number3) {
    console.log("Найбільше число:", number2);
} else {
    console.log("Найбільше число:", number3);
}
let month = Number(prompt("Введіть номер місяця (1-12):"));
if (month === 12 || month === 1 || month === 2) {
    console.log("Зима");
} else if (month >= 3 && month <= 5) {
    console.log("Весна");
} else if (month >= 6 && month <= 8) {
    console.log("Літо");
} else {
    console.log("Осінь");
}
let number = Number(prompt("Введіть число:"));
if (number > 0) {
    console.log("Число додатнє");
} else if (number === 0) {
    console.log("Число дорівнює нулю");
} else {
    console.log("Число від'ємне");
}
let angle = Number(prompt("Введіть кут у градусах:"));
let result = (angle >= 0 && angle < 90) ? "Гострий кут" :
             (angle === 90) ? "Прямий кут" :
             (angle > 90 && angle < 180) ? "Тупий кут" :
                (angle === 180) ? "Розгорнутий кут" : "Некоректне значення кута";
console.log(result);    
let score = Number(prompt("Введіть оцінку від 0 до 100:"));

let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 80 && score < 90) {
    grade = "B";
} else if (score >= 70 && score < 80) {
    grade = "C";
} else if (score >= 60 && score < 70) {
    grade = "D";
} else if (score >= 0 && score < 60) {
    grade = "F";
} else {
    console.log("Некоректне значення оцінки");
}

console.log("Літерна оцінка:", grade);
console.log("Оцінка до інкремента:", score);

// Постфіксний інкремент
score++;

console.log("Оцінка після інкремента:", score);

// Тернарний оператор
let result1 = score >= 60 && score <= 100 ? "Студент зарахований" : "Студент не зарахований";

console.log(result1);