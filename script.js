let main = document.querySelector("main");
let userInp = document.querySelector("input");
let addTaskBtn = document.querySelector(".addTask");
let showTask = document.querySelector(".showTask");
let iconsClass = ["ri-check-line", "ri-close-line"]

let userTask = ""
userInp.addEventListener("input", function (event) {
    userTask = event.target.value;
})



addTaskBtn.addEventListener("click", function () {

    if (userTask.trim() === "" || userTask.length > 30) {
        let errorDisplay = document.createElement("div");
        errorDisplay.textContent = "Task length can't be less 0 and greater 30";
        errorDisplay.style.backgroundColor = "#303030";
        errorDisplay.style.color = "#fff";
        errorDisplay.style.width = 10 + "rem";
        errorDisplay.style.height = 10 + "rem";
        errorDisplay.style.borderRadius = "1rem";
        errorDisplay.style.fontSize = "0.9rem";
        errorDisplay.style.display = "flex";
        errorDisplay.style.alignItems = "center";
        errorDisplay.style.justifyContent = "center";
        errorDisplay.style.position = "absolute";
        errorDisplay.style.zIndex = 99;
        errorDisplay.style.top = "50%";
        errorDisplay.style.bottom = "50%";
        main.appendChild(errorDisplay);

        setTimeout(function(){
            errorDisplay.remove();
            userInp.value = "";
        },2000)
        return;
    }
    let div1 = document.createElement("div");
    div1.classList.add("task");
    let li = document.createElement("li");
    li.textContent = userTask;
    let div2 = document.createElement("div");
    div2.className = "taskOptions";
    let i1 = document.createElement("i");
    i1.classList.add(iconsClass[0], "option", "markAsDone");
    let i2 = document.createElement("i");
    i2.classList.add(iconsClass[1], "option", "Remove");

    showTask.appendChild(div1);
    div1.appendChild(li);
    div1.appendChild(div2);
    div2.appendChild(i1);
    div2.appendChild(i2);

    userInp.value = "";
    userTask = "";
})

userInp.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTaskBtn.click();
    }
})

showTask.addEventListener("click", function (event) {
    let elemClassList = event.target;
    let parentElem = event.target.parentElement.parentElement;
    let isCompleted;

    elemClassList.classList.forEach(function (val) {
        if (val === "markAsDone") {
            parentElem.classList.forEach(function (val) {
                if (val === "completed") {
                    isCompleted = true;
                }
            })
            if (!isCompleted) {
                parentElem.classList.add("completed");

            } else {
                parentElem.classList.remove("completed");
                isCompleted = false;
            }
        } else if (val === "Remove") {
            parentElem.remove();
        }
    })



})