function timeMessage(message, time){
    setTimeout(function(){
    console.log(message);
}, time);
}   timeMessage("Hello setTimeOut!", 2000)

let button = document.querySelector("#start");
let counter = document.querySelector("#counter");

let number = 0;
let timer;

button.addEventListener("click", function() {

    timer = setInterval(function() {

        number++;

        counter.textContent = number;

        if (number === 10) {
            clearInterval(timer);
        }

    }, 1000);

});
let button1 = document.querySelector("#changeColor");

let colors = [
    "--color1",
    "--color2",
    "--color3",
    "--color4",
    "--color5"
];

button1.addEventListener("click", function() {

    let randomIndex = Math.floor(Math.random() * colors.length);

    let randomColor = colors[randomIndex];

    document.body.style.backgroundColor =
        getComputedStyle(document.documentElement)
        .getPropertyValue(randomColor);
});