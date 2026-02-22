const gameBoard = document.querySelector(".all-blocks");
const scrElem = document.querySelector(".score span");
const snkLength = document.querySelector(".snake-length span");
let score = 0;
let direction = "right";
let foodCordinates = null;
let isOut = false;

const blockHeight = 40;
const blockWidth = 40;
const blocks = [];
let cols = Math.floor(gameBoard.clientWidth / blockWidth);
let rows = Math.floor(gameBoard.clientHeight / blockHeight);
(function () {
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const div = document.createElement("div");
            div.classList.add("block");
            // div.innerText = `${row},${col}`;
            blocks[`${row},${col}`] = div;
            gameBoard.appendChild(div);
        }
    }
})();


const snake = [
    { r: 0, c: 0 },
    { r: 0, c: 1 },
    { r: 0, c: 2 }
]

function showSnake() {
    snake.forEach(function (elem) {
        blocks[`${elem.r},${elem.c}`].classList.add("fill");
    })
}

function showFood() {
    const food = { r: Math.floor(Math.random() * rows), c: Math.floor(Math.random() * cols) };
    blocks[`${food.r},${food.c}`].classList.add("foodColor");
    return food;
}
function eatFood(head) {
    if (head.c === foodCordinates.c && head.r === foodCordinates.r) {
        blocks[`${foodCordinates.r},${foodCordinates.c}`].classList.remove("foodColor");
        foodCordinates = showFood();
        snakeGrow();
        increaseScore();
    }
}
function increaseScore() {
    score += 10;
    scrElem.textContent = score;
}
function snakeGrow() {
    if (Number(snkLength.textContent) < 12) {
        let tail = snake[0];
        snake.unshift({ r: tail.r, c: tail.c });
        snkLength.textContent = Number(snkLength.textContent) + 1
    }

}

function Out(head) {
    if ((head.r < 0 || head.r >= rows) || (head.c < 0 || head.c >= cols)) {
        isOut = true;
    }
}

function selfCollison(head) {
    for (let i = 0; i < snake.length - 1; i++) {
        let snakeBody = snake[i];
        if (snakeBody.r === head.r && snakeBody.c === head.c) {
            isOut = true;
            break;
        }
    }
}

function outScreen() {
    gameBoard.innerHTML = "";
    const div = document.createElement("div");
    const btn = document.createElement("button");
    btn.innerText = "Restart";
    div.classList.add("outScreen");
    div.style.opacity = 1;
    div.textContent = `Nope,Out!`;
    div.appendChild(btn);
    gameBoard.appendChild(div);
    document.querySelector("button").addEventListener("click", function () {
        window.location.reload();
    })
}

let Int = setInterval(function () {
    let head = snake[snake.length - 1];

    snake.forEach(function (elem) {
        blocks[`${elem.r},${elem.c}`].classList.remove("fill");
    })
    if (direction === "left") {
        snake.push({ r: head.r, c: head.c - 1 });
        head = snake[snake.length - 1];
        Out(head);
        selfCollison(head);
        eatFood(head);
    } else if (direction === "right") {
        snake.push({ r: head.r, c: head.c + 1 });
        head = snake[snake.length - 1];
        Out(head);
        selfCollison(head);
        eatFood(head);
    } else if (direction === "down") {
        snake.push({ r: head.r + 1, c: head.c });
        head = snake[snake.length - 1];
        Out(head);
        selfCollison(head);
        eatFood(head);
    } else if (direction === "up") {
        snake.push({ r: head.r - 1, c: head.c });
        head = snake[snake.length - 1];
        Out(head);
        selfCollison(head);
        eatFood(head);
    }

    if (!isOut) {
        snake.shift();
        showSnake();
    } else {
        outScreen();
        clearInterval(Int);
    }
}, 300)

let dispatcher = {
    "ArrowUp": function () { direction = direction !== "down" ? "up" : direction },
    "ArrowDown": function () { direction = direction !== "up" ? "down" : direction },
    "ArrowLeft": function () { direction = direction !== "right" ? "left" : direction },
    "ArrowRight": function () { direction = direction !== "left" ? "right" : direction },
}
document.addEventListener("keydown", function (dets) {
    if (dispatcher.hasOwnProperty(dets.code)) {
        dispatcher[dets.code]();
    }
})


foodCordinates = showFood();