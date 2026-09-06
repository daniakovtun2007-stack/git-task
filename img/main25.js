function draw() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "red";
    ctx.fillRect(330, 330, 200, 100);

    ctx.fillStyle = "blue";
    ctx.fillRect(250, 250, 200, 100);

    ctx.fillStyle = "yellow";
    ctx.fillRect(400, 400, 200, 100);
}

draw();

const canvas1 = document.getElementById("canvas1");
const ctx1 = canvas1.getContext("2d");

function fillGradient(color1, color2) {
    const gradient = ctx1.createLinearGradient(
        0, 0,
        canvas1.width, canvas1.height
    );

    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);

    ctx1.fillStyle = gradient;
    ctx1.fillRect(0, 0, canvas1.width, canvas1.height);
}

fillGradient("red", "blue");

const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");

function drawLine(x1, y1, x2, y2) {
    ctx2.beginPath();
    ctx2.moveTo(x1, y1);
    ctx2.lineTo(x2, y2);
    ctx2.stroke();
}

drawLine(50, 50, 500, 300);

function createLine(x1, y1, x2, y2, color, width) {
    const svg = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
    );

    svg.setAttribute("width", 600);
    svg.setAttribute("height", 400);

    const line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
    );

    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", color);
    line.setAttribute("stroke-width", width);

    svg.appendChild(line);
    document.body.appendChild(svg);
}

createLine(50, 50, 500, 300, "red", 5);

function createRectangle(width, height, fillColor, strokeColor, strokeWidth) {
    const svg = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
    );

    svg.setAttribute("width", width + strokeWidth * 2);
    svg.setAttribute("height", height + strokeWidth * 2);

    const rect = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );

    rect.setAttribute("x", strokeWidth);
    rect.setAttribute("y", strokeWidth);
    rect.setAttribute("width", width);
    rect.setAttribute("height", height);
    rect.setAttribute("fill", fillColor);
    rect.setAttribute("stroke", strokeColor);
    rect.setAttribute("stroke-width", strokeWidth);

    svg.appendChild(rect);
    document.getElementById("container").appendChild(svg);
}

createRectangle(300, 150, "blue", "black", 5);