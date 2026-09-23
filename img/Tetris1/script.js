const canvas = document.getElementById("tetris");
const ctx = canvas.getContext("2d");
const stopBtn = document.getElementById("stop")
const scoreElement = document.getElementById("score");
const linesElement = document.getElementById("lines");
const restartButton = document.getElementById("restart");
const startBtn = document.getElementById("start");

const BLOCK_SIZE = 30;

const COLS = 10;
const ROWS = 20;

const COLORS = [
    "cyan",
    "yellow",
    "purple",
    "green",
    "red",
    "blue",
    "orange"
];

const SHAPES = [
    // I
    [
        [1, 1, 1, 1]
    ],

    // O
    [
        [1, 1],
        [1, 1]
    ],

    // T
    [
        [0, 1, 0],
        [1, 1, 1]
    ],

    // S
    [
        [0, 1, 1],
        [1, 1, 0]
    ],

    // Z
    [
        [1, 1, 0],
        [0, 1, 1]
    ],

    // J
    [
        [1, 0, 0],
        [1, 1, 1]
    ],

    // L
    [
        [0, 0, 1],
        [1, 1, 1]
    ]
];

let board;

let player;

let score;

let startTheGame=false;

let lines;

let gameOver;

let dropCounter;

let lastTime;


/* =========================
   CREATE BOARD
========================= */

function createBoard() {

    return Array.from(
        { length: ROWS },
        () => Array(COLS).fill(0)
    );
}


/* =========================
   CREATE PIECE
========================= */

function createPiece() {

    const index =
        Math.floor(Math.random() * SHAPES.length);

    return {

        shape: SHAPES[index],

        color: COLORS[index],

        x:
            Math.floor(COLS / 2) -
            Math.floor(SHAPES[index][0].length / 2),

        y: 0
    };
}


/* =========================
   DRAW BLOCK
========================= */

function drawBlock(x, y, color) {

    ctx.fillStyle = color;

    ctx.fillRect(
        x * BLOCK_SIZE,
        y * BLOCK_SIZE,
        BLOCK_SIZE,
        BLOCK_SIZE
    );

    ctx.strokeStyle = "#222";

    ctx.strokeRect(
        x * BLOCK_SIZE,
        y * BLOCK_SIZE,
        BLOCK_SIZE,
        BLOCK_SIZE
    );
}


/* =========================
   DRAW BOARD
========================= */

function drawBoard() {

    for (let y = 0; y < ROWS; y++) {

        for (let x = 0; x < COLS; x++) {

            if (board[y][x]) {

                drawBlock(
                    x,
                    y,
                    board[y][x]
                );
            }
        }
    }
}


/* =========================
   DRAW PLAYER
========================= */

function drawPlayer() {

    const shape = player.shape;

    for (let y = 0; y < shape.length; y++) {

        for (let x = 0; x < shape[y].length; x++) {

            if (shape[y][x]) {

                drawBlock(
                    player.x + x,
                    player.y + y,
                    player.color
                );
            }
        }
    }
}


/* =========================
   DRAW
========================= */

function draw() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    drawBoard();

    if (!gameOver) {
        drawPlayer();
    }
}


/* =========================
   COLLISION
========================= */

function collision() {

    const shape = player.shape;

    for (let y = 0; y < shape.length; y++) {

        for (let x = 0; x < shape[y].length; x++) {

            if (!shape[y][x]) {
                continue;
            }

            const newX =
                player.x + x;

            const newY =
                player.y + y;


            // Стіни та дно

            if (
                newX < 0 ||
                newX >= COLS ||
                newY >= ROWS
            ) {

                return true;
            }


            // Інші блоки

            if (
                newY >= 0 &&
                board[newY][newX]
            ) {

                return true;
            }
        }
    }

    return false;
}


/* =========================
   MERGE
========================= */

function merge() {

    const shape = player.shape;

    for (let y = 0; y < shape.length; y++) {

        for (let x = 0; x < shape[y].length; x++) {

            if (shape[y][x]) {

                board[player.y + y][player.x + x] =
                    player.color;
            }
        }
    }
}


/* =========================
   CLEAR LINES
========================= */

function clearLines() {

    let cleared = 0;

    for (let y = ROWS - 1; y >= 0; y--) {

        const full =
            board[y].every(cell => cell !== 0);

        if (full) {

            board.splice(y, 1);

            board.unshift(
                Array(COLS).fill(0)
            );

            cleared++;

            y++;
        }
    }


    if (cleared > 0) {

        lines += cleared;

        linesElement.textContent = lines;


        if (cleared === 1) {
            score += 100;
        }

        if (cleared === 2) {
            score += 300;
        }

        if (cleared === 3) {
            score += 500;
        }

        if (cleared === 4) {
            score += 800;
        }

        scoreElement.textContent = score;
    }
}


/* =========================
   MOVE DOWN
========================= */

function moveDown() {

    player.y++;

    if (collision()) {

        player.y--;

        merge();

        clearLines();

        player = createPiece();


        if (collision()) {

            gameOver = true;
        }
    }

    draw();
}


/* =========================
   MOVE LEFT
========================= */

function moveLeft() {

    player.x--;

    if (collision()) {

        player.x++;
    }

    draw();
}


/* =========================
   MOVE RIGHT
========================= */

function moveRight() {

    player.x++;

    if (collision()) {

        player.x--;
    }

    draw();
}


/* =========================
   ROTATE
========================= */

function rotate() {

    const oldShape = player.shape;

    const rows = oldShape.length;

    const cols = oldShape[0].length;

    const newShape = [];


    for (let x = 0; x < cols; x++) {

        newShape[x] = [];

        for (let y = rows - 1; y >= 0; y--) {

            newShape[x].push(
                oldShape[y][x]
            );
        }
    }


    player.shape = newShape;


    // Якщо після повороту зіткнення
    // повертаємо стару фігуру

    if (collision()) {

        player.shape = oldShape;
    }

    draw();
}


/* =========================
   KEYBOARD
========================= */

document.addEventListener(
    "keydown",
    event => {

        if (gameOver) {
            return;
        }


        if (event.key === "ArrowLeft") {

            moveLeft();
        }


        if (event.key === "ArrowRight") {

            moveRight();
        }


        if (event.key === "ArrowDown") {

            moveDown();
        }


        if (event.key === "ArrowUp") {

            rotate();
        }
    }
);


/* =========================
   GAME LOOP
========================= */

function update(time = 0) {


    if (gameOver) {

        draw();

        drawGameOver();

        return;
    } else if(!startTheGame){
        draw();
        drawStartGame();
        return;
    }


    const deltaTime =
        time - lastTime;

    lastTime = time;

    dropCounter += deltaTime;


    if (dropCounter > 500) {

        moveDown();

        dropCounter = 0;
    }


    draw();

    requestAnimationFrame(update);
}


/* =========================
   GAME OVER
========================= */

function drawGameOver() {

    ctx.fillStyle =
        "rgba(0, 0, 0, 0.7)";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    ctx.fillStyle = "white";

    ctx.font = "30px Arial";

    ctx.textAlign = "center";

    ctx.fillText(
        "GAME OVER",
        canvas.width / 2,
        canvas.height / 2
    );
}


/* =========================
   RESTART
========================= */

function restart() {

    board = createBoard();

    player = createPiece();

    score = 0;

    lines = 0;

    gameOver = false;

    dropCounter = 0;

    lastTime = 0;


    scoreElement.textContent = score;

    linesElement.textContent = lines;


    requestAnimationFrame(update);
}
function drawStartGame() {

    ctx.fillStyle =
        "rgba(0, 0, 0, 0.7)";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    ctx.fillStyle = "white";

    ctx.font = "15px Arial";

    ctx.textAlign = "center";

    ctx.fillText(
        "TAP START TO START THE GAME",
        canvas.width / 2,
        canvas.height / 2
    );
}

restartButton.addEventListener(
    "click",
    restart
);


restart();

function stopGame(){
    gameOver = true;
    draw()
}

stopBtn.addEventListener("click", stopGame)
function startGame(){
startTheGame = true;
requestAnimationFrame(update);
}

startBtn.addEventListener("click", startGame)

