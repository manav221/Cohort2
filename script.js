let btn = document.querySelector("button");
let progressBar = document.querySelector(".inner");
let percent = document.querySelector("h3");

let grow = 0;
let isDownloading = false
btn.addEventListener("click", function () {
    
    if (grow >= 100 || !isDownloading) {
        grow = 0;
    }
    
    if (!isDownloading) {
        isDownloading = true;
        let randomNum = 50 + Math.floor(Math.random() * 50);
        let int = setInterval(function () {
            grow++;
            progressBar.style.width = grow + "%";
            percent.innerHTML = grow + "%";
        }, randomNum)
        
        setTimeout(function () {
            isDownloading = false;
            clearInterval(int);
        }, randomNum * 100)
    } else {
        isDownloading = true;
        console.log("can't download while downloading");
    }



})