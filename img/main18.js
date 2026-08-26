function changeColor(element) {
    document.body.style.backgroundColor = element.value;
}
function showHobbies() {

    let checkboxes = document.querySelectorAll('input[type="checkbox"]');

    let selected = [];

    checkboxes.forEach((checkbox) => {

        if (checkbox.checked) {
            selected.push(checkbox.value);
        }

    });

    document.querySelector("#result").textContent =
        "Вибрані хобі: " + selected.join(", ");
}

function showCountry(element) {

    let result = document.querySelector("#result");

    if (element.value === "ukraine") {
        result.textContent = "Столиця: Київ";

    } else if (element.value === "canada") {
        result.textContent = "Столиця: Оттава";

    } else if (element.value === "france") {
        result.textContent = "Столиця: Париж";
    }
}

function showRating(element) {

    let result1 = document.querySelector("#result1");

    result1.textContent = "Дякуємо за вашу оцінку " + element.value + "!";
}

function calculatePrice() {

    let pizza = document.querySelector("#pizza");

    let size = document.querySelector('input[name="size"]:checked');

    let toppings = document.querySelectorAll(
        'input[type="checkbox"]:checked'
    );

    let price = Number(pizza.value);

    if (size) {
        price += Number(size.value);
    }

    toppings.forEach(function(topping) {
        price += Number(topping.value);
    });

    document.querySelector("#price").textContent =
        "Ціна: " + price + " грн";
}