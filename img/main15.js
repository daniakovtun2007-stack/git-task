const text = document.querySelector("#text");
const btn = document.querySelector("#button");

function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777216)
        .toString(16)
        .padStart(6, "0");
}

btn.onclick = function () {
    text.style.color = getRandomColor();
};

const box = document.querySelector("#box");

box.style.marginTop = "20px";
box.style.width = "100px";
box.style.height = "100px";
box.style.backgroundColor = "blue";

box.ondblclick = function () {
    box.style.width = "200px";
    box.style.height = "200px";
};

const counter = document.querySelector("#counter");
const button1 = document.querySelector("#button1");

let count = 0;

function increaseCounter() {
    count++;

    counter.textContent = count;
    counter.style.marginTop = "20px";

    if (count >= 10) {
        button1.removeEventListener("click", increaseCounter);
    }
}

button1.addEventListener("click", increaseCounter);

const button2 = document.querySelector("#button2");
const container = document.querySelector("#container");
const container1 = document.querySelector(".container1");

button2.onclick = function () {

    for (let i = 1; i <= 10; i++) {

        const element = document.createElement("div");

        element.textContent = `Елемент ${i}`;

        element.style.width = "100px";
        element.style.height = "50px";
        element.style.backgroundColor = "yellow";
        element.style.margin = "5px";

        element.onclick = function () {
            element.remove();
        };

        container.append(element);
    }
};

const blockContainer = document.querySelector(".blockContainer");

blockContainer.addEventListener("click", function(event) {

    if (event.target.classList.contains("first")) {
        alert("Ви натиснули першу кнопку");
    }

    if (event.target.classList.contains("second")) {
        alert("Ви натиснули другу кнопку");
    }

    if (event.target.classList.contains("third")) {
        alert("Ви натиснули третю кнопку");
    }

});