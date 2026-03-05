const boards = document.querySelectorAll(".board");
const cards = document.querySelectorAll(".card");
const modal = select(".modal");
const modalSec = select(".modal-2");
const addTaskBtn = select(".new-task");
const modalOverlay = document.querySelectorAll(".overlay");
const createTaskBtn = select("#create-task");
const searchBox = select("#search-box");
let dragedElement = null;
let lstBoard = boards[0];
let currentBoard = boards[0];
let allTaskData = {};


if (localStorage.getItem("tasks")) {
    let data = JSON.parse(localStorage.getItem("tasks"));
    for(let board in data){
        let b = document.querySelector(`#${board}`);
        data[board].forEach(function(c){
            NewTask(c,`#${board}`);
            currentBoard = b;
            taskCountChng();
        })
    }
}

function select(elem) {
    return document.querySelector(elem);
}

function dragEventOnBoards(board) {
    board.addEventListener("dragenter", function (dets) {
        dets.preventDefault();
        board.classList.add("hover-over");
    })

    board.addEventListener("dragleave", function (dets) {
        dets.preventDefault();
        board.classList.remove("hover-over");
    })

    board.addEventListener("dragover", function (dets) {
        dets.preventDefault();
        board.classList.add("hover-over");
    })

    board.addEventListener("drop", function (dets) {
        dets.preventDefault();
        board.children[1].appendChild(dragedElement);
        board.classList.remove("hover-over");
        currentBoard = board;
        taskCountChng();
        saveTasks();
    })
}

function toggleCreateNewTaskBtn() {
    addTaskBtn.addEventListener("click", function () {
        select("#task-title").value = "";
        select("#task-desc").value = "";
        modal.style.display = "flex";
    })

    modalOverlay.forEach(function (overlay) {
        overlay.addEventListener("click", function () {
            overlay.parentElement.style.display = "none";
        })
    })

    document.querySelectorAll(".new-task")
        .forEach((btn) => {
            btn.addEventListener("click", function () {
                addTaskBtn.click();
            })

        })
}

function taskPriorityChng(priority, priorityElem) {
    const priorities = {
        "Low": function (elem) {
            elem.classList.add("priority-low");
        },
        "Medium": function (elem) {
            elem.classList.add("priority-medium");
        },
        "High": function (elem) {
            elem.classList.add("priority-high");
        }
    }

    if (priorities[priority]) {
        priorities[priority](priorityElem)
    }
}

function createTask(taskDets) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("draggable", "true");

    // card top
    let cardTopDets = document.createElement("div");
    let priority = document.createElement("div");
    let creationTime = document.createElement("div");
    let timeIcon = document.createElement("i");
    let timeSpan = document.createElement("span");

    cardTopDets.classList.add("card-top-dets");

    priority.classList.add("priority");
    priority.textContent = taskDets.taskPriority;

    taskPriorityChng(taskDets.taskPriority, priority);

    timeIcon.classList.add("ri-time-line");
    timeSpan.textContent = taskDets.time;

    creationTime.classList.add("creation-time");
    creationTime.appendChild(timeIcon);
    creationTime.appendChild(timeSpan);

    cardTopDets.appendChild(priority);
    cardTopDets.appendChild(creationTime);

    // card middle
    let workDets = document.createElement("div");
    let workName = document.createElement("div");
    let workDesc = document.createElement("div");
    let p = document.createElement("p");

    p.textContent = taskDets.taskDesc;
    workDets.classList.add("work-dets");
    workName.classList.add("work-name");
    workName.textContent = taskDets.taskTitle;
    workDesc.classList.add("work-desc");

    workDesc.appendChild(p);
    workDets.appendChild(workName);
    workDets.appendChild(workDesc);

    // card bottom
    let cardBottom = document.createElement("div");
    let editBtn = document.createElement("div");
    let pencilIcon = document.createElement("i");
    let editSpan = document.createElement("span");
    let deleteBtn = document.createElement("div");
    let binIcon = document.createElement("i");

    cardBottom.classList.add("card-bottom-dets");
    editBtn.classList.add("card-opt", "edit-btn");
    pencilIcon.classList.add("ri-pencil-line");
    editSpan.textContent = "Edit";
    deleteBtn.classList.add("card-opt", "delete");
    binIcon.classList.add("ri-delete-bin-line");
    editBtn.appendChild(pencilIcon);
    editBtn.appendChild(editSpan);

    deleteBtn.appendChild(binIcon);

    cardBottom.appendChild(editBtn);
    cardBottom.appendChild(deleteBtn);

    card.appendChild(cardTopDets);
    card.appendChild(workDets);
    card.appendChild(cardBottom);

    return card;
}
function NewTask(taskDets,boardName="#todo") {
    let card = createTask(taskDets);

    select(`${boardName} .cards`).appendChild(card);
    modal.style.display = "none";

    card.addEventListener("dragstart", function (dets) {
        dragedElement = dets.target;
        lstBoard = dets.target.closest(".board");
    })
    card.querySelector(".delete")
        .addEventListener("click", function () {
            card.remove();
            taskCountChng();
            saveTasks();
        })
    card.querySelector(".edit-btn")
        .addEventListener("click", function () {
            editTaskDets(card);
        })
    saveTasks();
}
createTaskBtn.addEventListener("click", function (dets) {
    let taskDetsObj = {};
    const taskTitle = select("#task-title").value;
    const taskDesc = select("#task-desc").value;
    const taskPriority = select("#task-priority").value;

    taskDetsObj["taskTitle"] = taskTitle;
    taskDetsObj["taskDesc"] = taskDesc;
    taskDetsObj["taskPriority"] = taskPriority;
    taskDetsObj["time"] = "12 days ago";
    NewTask(taskDetsObj);

    currentBoard = boards[0];
    taskCountChng();
})

function taskCountChng() {
    let currCount = currentBoard.querySelector(`.cards`).children.length;
    let lastCount = lstBoard.querySelector(`.cards`).children.length;

    document.querySelector(`#${currentBoard.id} .no-of-cards`).textContent = currCount;
    document.querySelector(`#${lstBoard.id} .no-of-cards`).textContent = lastCount;
}

function editTaskDets(card) {
    modalSec.style.display = "flex";
    select("#task-title-chng").value = card.querySelector(".work-name").textContent;
    select("#task-desc-chng").value = card.querySelector(".work-desc p").textContent;
    select("#task-priority-chng").value = card.querySelector(".priority").textContent;

    select("#change-task-dets").onclick = function () {
        card.querySelector(".work-name").textContent = select("#task-title-chng").value;
        card.querySelector(".work-desc p").textContent = select("#task-desc-chng").value;
        card.querySelector(".priority").textContent = select("#task-priority-chng").value;
        taskPriorityChng(card.querySelector(".priority").textContent, card.querySelector(".priority"));
        modalSec.style.display = "none";
        saveTasks();
    };
}

searchBox.addEventListener("input", function (dets) {
    const allCards = document.querySelectorAll(".card");
    allCards.forEach(function (card) {
        if (searchBox.value === "") {
            return;
        } else {
            if (card.querySelector(".work-name").textContent.toLowerCase().startsWith(searchBox.value)) {
                card.classList.add("high-light");
            }
        }
    })
})

searchBox.addEventListener("blur", function () {
    document.querySelectorAll(".card")
        .forEach(function (card) {
            if (card.classList[1]) {
                card.classList.remove("high-light")
            }
        })
})

function saveTasks() {
    boards.forEach(function (board) {
        const allCards = board.querySelectorAll(".card");

        allTaskData[board.id] = Array.from(allCards).map(function (c) {
            return {
                taskTitle: c.querySelector(".work-name").textContent,
                taskDesc: c.querySelector(".work-desc").textContent,
                taskPriority: c.querySelector(".priority").textContent,
                time:"12 days ago"
            }
        })
    })
    localStorage.setItem("tasks", JSON.stringify(allTaskData));
}

dragEventOnBoards(boards[0]);
dragEventOnBoards(boards[1]);
dragEventOnBoards(boards[2]);
dragEventOnBoards(boards[3]);

toggleCreateNewTaskBtn();
taskCountChng();