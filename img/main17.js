let amount = document.querySelector("#amount");
let rate = document.querySelector("#rate");
let button = document.querySelector("#convert");
let result = document.querySelector("#result");

button.addEventListener("click", function() {

    let money = Number(amount.value);
    let exchangeRate = Number(rate.value);

    let converted = money * exchangeRate;

    result.value = converted;
    if (money === 0 || exchangeRate === 0) {
        result.value = "";
    }
});

let taskInput = document.querySelector("#taskInput");
let addTask = document.querySelector("#addTask");
let taskList = document.querySelector("#taskList");
let pElement = document.querySelector("p");
pElement.style.display = "block";
addTask.addEventListener("click", function() {
    pElement.style.display = "none";

    let taskText = taskInput.value;

    if (taskText !== "") {

        let li = document.createElement("li");

        li.textContent = taskText;
        li.style.margin = "10px";

        let deleteButton = document.createElement("button");

        deleteButton.textContent = "Видалити";

        deleteButton.addEventListener("click", function() {
            li.remove();
        });

        li.append(deleteButton);

        taskList.append(li);

        taskInput.value = "";
    }

});