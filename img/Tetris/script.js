const canvas = document.getElementById("tetris");
const context = canvas.getContext("2d");
const scoreEl = document.querySelector(span);

let score = 0;
const colors = [ 
    null,
    "red",
    "green",
     "blue",
     "yellow",
     "purple",
     "orange",
     "silver"
]
const shapes = [

  [
    [1, 1, 1, 1]
  ],

  [
    [1, 1],
    [1, 1]
  ],

  [
    [0, 1, 0],
    [1, 1, 1]
  ],

  [
    [0, 1, 1],
    [1, 1, 0]
  ],

  [
    [1, 1, 0],
    [0, 1, 1]
  ],

  [
    [1, 0, 0],
    [1, 1, 1]
  ],

  [
    [0, 0, 1],
    [1, 1, 1]
  ]
];
context.scale(30,30);

function createMatrix(w, h) {
    const matrix = [];
    while(h--){
        matrix.push(new Array(w).fill(0));
    }
    return matrix;
}
const arena = createMatrix(10, 20);

const player = {
    pos: {x:0, y:0},
    matrix: null,
    score: 0
};

function draw(){
    context.fillStyle="#000";
    context.fillRect(0,0, canvas.width, canvas.height);

    drawMatrix(arena, {x:0, y:0});
}
function drawMatrix(matrix, offset){
    matrix.forEach(row , y => {
        row.forEach(value, x =>{
            if(value !== 0){
                context.fillStyle=colors[value]; 
                context.fillRect(x+offset.x, y+offset.y, 1,1);
            }
        });
    });
}
function collision() {
    for (let y; y<)
}

