let figure = prompt("Введіть назву фігури(Коло, Трикутник, Квадрат):").toLowerCase();
switch (figure) {
    case "коло":
        console.log("Коло не має сторін.");
        break;
    case "трикутник":
        console.log("Трикутник має 3 сторони.");
        break;
    case "квадрат":
        console.log("Квадрат має 4 сторони.");
        break;
    default:
        console.log("Невідома фігура.");
}
let number1 = 1;
let sum = 0;

while (number1 <= 20) {
    if (number1 % 2 === 0) {
        sum += number1;
    }

    number1++;
}

console.log("Сума парних чисел:", sum);
let number2 = 5;

for (let i = 1; i <= 10; i++) {
    console.log(number2 + " * " + i + " = " + number2 * i);
}
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
let number3 = Number(prompt("Введіть число:"));

for (let i = 0; i < 1; i++) {
    if (number3 % 2 === 0) {
        console.log("Число парне");
    } else {
        console.log("Число непарне");
    }
}
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("Перше парне число:", i);
        break;
    }
}
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }

    console.log(i);
}