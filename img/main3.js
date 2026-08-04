let number1 = 10;
let number2 = 25;
alert(" number1 > number2: " + (number1 > number2));
let number3 = Number(prompt("Введіть перше число: "));
let number4 = Number(prompt("Введіть друге число: "));
console.log("number3 > number4: " + (number3 > number4));
let userAge = Number(prompt("Скільки вам років?"));

if (userAge < 18) {
    console.log("Ви не можете використовувати цей ресурс.");
} else {
    console.log("Ви можете використовувати цей ресурс.");
}
let goodPrice = Number(prompt("Введіть ціну товару: "));
let goodQuantity = Number(prompt("Введіть кількість товару: "));
console.log("Загальна вартість: " + (goodPrice * goodQuantity));
let goodDiscount = Number(prompt("Введіть ціну товару: "));
alert("Знижка: " + (goodDiscount * 0.5));