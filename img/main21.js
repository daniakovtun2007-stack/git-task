let text = document.querySelector("#text");
let save = document.querySelector("#save");
let show = document.querySelector("#show");
let result = document.querySelector("#result");

save.addEventListener("click", function() {

    sessionStorage.setItem("message", text.value);

});

show.addEventListener("click", function() {

    let message = sessionStorage.getItem("message");

    result.textContent = message;

});

let color = document.querySelector("#color");
let save1 = document.querySelector("#save1");

let savedColor = localStorage.getItem("backgroundColor");

if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    color.value = savedColor;
}


save1.addEventListener("click", function() {

    localStorage.setItem(
        "backgroundColor",
        color.value
    );

    document.body.style.backgroundColor = color.value;
});

let task = document.querySelector("#task");
let add = document.querySelector("#add");
let list = document.querySelector("#list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function showTasks() {

    list.innerHTML = "";

    tasks.forEach(function(item, index) {

        let li = document.createElement("li");

        li.textContent = item;

        let deleteButton = document.createElement("button");

        deleteButton.textContent = "Видалити";

        deleteButton.addEventListener("click", function() {

            tasks.splice(index, 1);

            localStorage.setItem("tasks", JSON.stringify(tasks));

            showTasks();
        });

        li.appendChild(deleteButton);

        list.appendChild(li);
    });
}


add.addEventListener("click", function() {

    if (task.value.trim() === "") {
        return;
    }

    tasks.push(task.value);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    task.value = "";

    showTasks();
});


showTasks();

let user = {
    name: "Danya",
    age: 18,
    isStudent: true,
    hobbies: ["programming", "sport", "music"]
};

let jsonData = JSON.stringify(user);

console.log(jsonData);