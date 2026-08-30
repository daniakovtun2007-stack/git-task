let timer = document.querySelector("h2");
let button = document.querySelector(".button1");
let reset = document.querySelector(".button2");

let time = 25 * 60;
let interval = null;

button.addEventListener("click", function() {

    if (interval) return;

    interval = setInterval(function() {

        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        timer.textContent =
            String(minutes).padStart(2, "0") + ":" +
            String(seconds).padStart(2, "0");

        if (time === 0) {
            clearInterval(interval);
            interval = null;
        } else {
            time--;
        }

    }, 1000);

});

reset.addEventListener("click", function() {

    clearInterval(interval);

    time = 25 * 60;

    timer.textContent = "25:00";

    interval = null;
});