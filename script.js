let timeShow = document.querySelector("h1");
let mediaBtn = document.querySelector(".play-pause");
let resetBtn = document.querySelector(".reset");


let pauseBtn = document.createElement("i");
pauseBtn.classList.add("ri-pause-large-line");
mediaBtn.appendChild(pauseBtn);
pauseBtn.style.display = "none";

let isPlay = false;

let time = 10;
let rstTime = time;
let minutes = null;
let seconds = null;

let timer;

function resetTime(Timer){
    clearInterval(Timer);
    isPlay = false;
}

function resetUi(pauseButton,playButton){
    pauseButton.style.display = "none";
    playButton.style.display = "block";

}
mediaBtn.addEventListener("click", function () {

    if (!isPlay) {
        timer = setInterval(function(){
            if(time < 0){
                resetTime(timer);
                resetUi(pauseBtn,mediaBtn.children[0]);
                return;
            }
            minutes = Math.floor(time / 60);
            seconds = time % 60;
            timeShow.textContent = `${minutes < 10 ? '0' + minutes:minutes}:${seconds < 10 ? '0' + seconds:seconds}`;
            time--;
        },1000)
        pauseBtn.style.display = "block";
        mediaBtn.children[0].style.display = "none";
        isPlay = true;
    } else {
        resetTime(timer);
        resetUi(pauseBtn,mediaBtn.children[0]);
    }

})
resetBtn.addEventListener("click",function(){
    resetTime(timer);
    resetUi(pauseBtn,mediaBtn.children[0]);
    time = rstTime;
    minutes = Math.floor(time / 60);
    seconds = time % 60;
    timeShow.textContent = `${minutes < 10 ? "0" + minutes:minutes}:${seconds < 10 ? "0" + seconds:seconds}`;
})