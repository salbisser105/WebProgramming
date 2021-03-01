
const north = {dx:  0, dy: -1};
const east  = {dx:  1, dy:  0};
const south = {dx:  0, dy:  1};
const west  = {dx: -1, dy:  0};

let direction = north;

const clockwise = [north, east, south, west, north];
const countercw = [north, west, south, east, north];

let snake = [
    {x: 10, y: 5},
    {x: 10, y: 6},
    {x: 10, y: 7},
    {x: 10, y: 8},
];
let food = {x: 15, y: 15};

function snakeEquals(a, b) { 
	/*  here it is making a constant evaluation  */
    return  a.x === b.x && a.y === b.y;
}

function changeDirection(orientation) {
    /*  It changes the direction based on the times we press the arrow at keyboard.
    Ill do another tutorial in order to get it working according to what arrow we press..
    */
    const idx = orientation.indexOf(direction);
    direction = orientation[idx + 1];

}


function start() {
    const canvas  = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    const rightArrow = 39;
    const leftArrow  = 37;
    /*   evt => implements a listener on our code. */
    window.onkeydown = evt => {
        const orientation = (evt.keyCode === rightArrow) ? clockwise : countercw; /* if we have a right arrow we do clockwise otherwise we do countercw */
        changeDirection(orientation);
    };

    setInterval(() => {
        nextBoard();
        display(context);
    }, 1000 / 5);
}

function nextBoard() {
    const maxX = 20;
    const maxY = 20;
    const oldHead = snake[0];

    function inBounds(x, max) {
        if (x < 0)   { return max - 1 }
        if (x > max) { return 0 }
        return x
    }

    const head = {
        x: inBounds(oldHead.x + direction.dx, maxX),
        y: inBounds(oldHead.y + direction.dy, maxY)
    };

    if (snakeEquals(food, head)) {  // have we found any food?
        food.x = Math.floor(Math.random() * 20);   // place new food at random location
        food.y = Math.floor(Math.random() * 20);
    } else {
        /* fill here */ // no food found => no growth despite new head => remove last element
        snake.pop();
    }
   
    /* fill here */; // put head at front of the list
    snake.unshift(head);
}

function display(context) {
    // clear
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    // draw all elements
    context.fillStyle = "cyan";
    snake.forEach(element =>
        fillBox(context, element)
    );
    context.fillStyle = "green";
    fillBox(context, snake[0]);
    // draw food
    context.fillStyle = "red";
    fillBox(context, food);
}

function fillBox(context, element) {
    context.fillRect(element.x * 20 + 1, element.y * 20 + 1, 18, 18);
}