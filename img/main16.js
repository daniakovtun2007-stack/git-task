let block = document.querySelector('.block');

block.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'green';
});
block.addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});

const text = document.querySelector("#text");
const contextMenu = document.querySelector("#contextMenu");

const center = document.querySelector("#center");
const right = document.querySelector("#right");
const left = document.querySelector("#left");
const hide = document.querySelector("#hide");


contextMenu.style.display = "none";


text.addEventListener("contextmenu", function(event) {

    event.preventDefault();

    contextMenu.style.display = "block";
    contextMenu.style.marginTop = "20px";
    contextMenu.style.position = "absolute";
    contextMenu.style.left = event.clientX + "px";
    contextMenu.style.top = event.clientY + "px";
});

window.addEventListener("click", function(event) {

    event.preventDefault();
    contextMenu.style.display = "none";
});


center.addEventListener("click", function() {
    text.style.textAlign = "center";
    contextMenu.style.display = "none";
});


right.addEventListener("click", function() {
    text.style.textAlign = "right";
    contextMenu.style.display = "none";
});


left.addEventListener("click", function() {
    text.style.textAlign = "left";
    contextMenu.style.display = "none";
});

hide.addEventListener("click", function() {
    text.style.display = "none";
    contextMenu.style.display = "none";
});

let photo = document.querySelector("#photo");

photo.addEventListener("mouseover", function() {
    this.style.width = "600px";
    this.style.height = "600px";
});
photo.addEventListener("mouseout", function() {
    this.style.width = "";
    this.style.height = "";
});

let block1 = document.querySelector(".block1");
let container = document.querySelector("#container");

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowUp") {

        if (block1.offsetTop > 0) {
            block1.style.top = (block1.offsetTop - 20) + "px";
        }

    } else if (event.key === "ArrowDown") {

        if (block1.offsetTop + block1.offsetHeight < container.clientHeight) {
            block1.style.top = (block1.offsetTop + 20) + "px";
        }

    } else if (event.key === "ArrowLeft") {

        if (block1.offsetLeft > 0) {
            block1.style.left = (block1.offsetLeft - 20) + "px";
        }

    } else if (event.key === "ArrowRight") {

        if (block1.offsetLeft + block1.offsetWidth < container.clientWidth) {
            block1.style.left = (block1.offsetLeft + 20) + "px";
        }
    }

});

let menu = document.querySelector("ul");
let items = document.querySelectorAll("li");

let current = 0;

document.addEventListener("keydown", function(event) {

    if (event.key.toLowerCase() === "m") {
        menu.style.display = "block";

        items[current].classList.add("active");
    }

    else if (event.key === "ArrowDown") {

        items[current].classList.remove("active");

        if (current < items.length - 1) {
            current++;
        }

        items[current].classList.add("active");
    }

    else if (event.key === "ArrowUp") {

        items[current].classList.remove("active");

        if (current > 0) {
            current--;
        }

        items[current].classList.add("active");
    }
});


document.addEventListener("keyup", function(event) {

    if (event.key.toLowerCase() === "c") {
        menu.style.display = "none";
    }

});

let block3 = document.querySelector(".block3");
let container2 = document.querySelector("#container2");

let isDragging = false;

block3.addEventListener("mousedown", function() {
    isDragging = true;
});

document.addEventListener("mousemove", function(event) {

    if (isDragging) {

        let x = event.clientX - container2.getBoundingClientRect().left;
        let y = event.clientY - container2.getBoundingClientRect().top;

        if (x < 0) {
            x = 0;
        }

        if (y < 0) {
            y = 0;
        }

        if (x > container2.clientWidth - block3.offsetWidth) {
            x = container2.clientWidth - block3.offsetWidth;
        }

        if (y > container2.clientHeight - block3.offsetHeight) {
            y = container2.clientHeight - block3.offsetHeight;
        }

        block3.style.left = x + "px";
        block3.style.top = y + "px";
    }
});

document.addEventListener("mouseup", function() {
    isDragging = false;
});