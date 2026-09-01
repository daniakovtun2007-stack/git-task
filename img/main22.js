let number = 5;

Promise.resolve(number)
    .then(function(value) {
        return value + 10;
    })
    .then(function(value) {
        return value * 2;
    })
    .then(function(value) {
        return value - 10;
    })
    .then(function(value) {
        console.log(value);
    })
    .catch(function(error) {
        console.log("Помилка:", error);
    });

    function toUpperCase(text) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (typeof text !== "string") {
                reject("Це не рядок");
                return;
            }

            resolve(text.toUpperCase());
        }, 2000);
    });
}

toUpperCase("hello world")
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log("Помилка:", error);
    });

let num1 = parseFloat(prompt("Введіть перше число:"));
let num2 = parseFloat(prompt("Введіть друге число:"));

function checkNumbers(num1, num2) {

    return new Promise(function(resolve, reject) {

        setTimeout(function() {

            if (isNaN(num1) || isNaN(num2)) {
                reject("Це не числа");
                return;

            } else if (num1 < num2) {
                resolve("Друге число більше");

            } else if (num1 > num2) {
                resolve("Перше число більше");

            } else {
                reject("Числа рівні");
            }

        }, 2000);
    });
}

checkNumbers(num1, num2)
    .then(function(result) {
        alert(result);
    })
    .catch(function(error) {
        console.log("Помилка:", error);
    });