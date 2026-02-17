const bubbles = document.querySelector(".bubbles");
const bubbleHeight = 48;
const bubbleWidth = 48;
let hitVal = null;
let score = 0;
let isGameOver = false;

function createBubbles() {
    const cols = Math.floor((bubbles.clientWidth) / (bubbleWidth + 8));
    const rows = Math.floor((bubbles.clientHeight) / (bubbleHeight + 8));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let randNum = Math.floor(Math.random() * 10);
            let bubble = document.createElement("div");
            bubble.classList.add("bubble");
            bubble.innerText = randNum;
            bubbles.appendChild(bubble);
        }
    }
}
function timer() {
    let timerBox = document.querySelector(".timer span");
    let sec = 10;
    document.querySelector(".game-over").classList.add("hidden");
    const timer = setInterval(function () {
        timerBox.innerText = sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            isGameOver = true;
            document.querySelector(".game-over").classList.remove("hidden");
            document.querySelector(".game-over p span").textContent = score;
        }
    }, 1000)
}
function newHit() {
    let hitBox = document.querySelector(".hits span");
    hitBox.textContent = Math.floor(Math.random() * 10);
    hitVal = Number(hitBox.textContent);
}
function inceraseScore() {
    score += 10;
    document.querySelector(".score span").innerText = score;
}
bubbles.addEventListener("click", function (dets) {
    if(isGameOver) return;
    if (dets.target.classList[0] === "bubble") {
        if (hitVal === Number(dets.target.innerText)) {
            inceraseScore();
            bubbles.innerHTML = "";
            createBubbles();
            newHit();
        }
    }
})

createBubbles();
timer();
newHit();