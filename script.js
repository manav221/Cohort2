let userPost = [
    {
        profilePic: "https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vZGVsfGVufDB8fDB8fHww",
        pendingMsg: 7,
        location: "USA,California",
        userName: "Victoria",
        age: 20,
        bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, consequatur quos? Animi quibusdam quasi autem?",
        hobbies: [
            {
                hobby: "Dance",
                icon: `<i class="ri-quill-pen-fill"></i>`
            },
            {
                hobby: "Code",
                icon: `<i class="ri-github-line"></i>`
            },
            {
                hobby: "Flute",
                icon: `<i class="ri-music-fill"></i>`
            },
        ],
        isFriend: false
    },
    {
        profilePic: "https://plus.unsplash.com/premium_photo-1673757094096-be20fd9c8b30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8",
        pendingMsg: 3,
        location: "UK London",
        userName: "Lisa",
        age: 21,
        bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, consequatur quos? Animi quibusdam",
        hobbies: [
            {
                hobby: "Cooking",
                icon: `<i class="ri-knife-fill"></i>`
            },
            {
                hobby: "Paint",
                icon: `<i class="ri-paint-fill"></i>`
            },
            {
                hobby: "Music",
                icon: `<i class="ri-music-fill"></i>`
            }],
        isFriend: false
    },
    {
        profilePic: "https://plus.unsplash.com/premium_photo-1695603438212-522c952b1172?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU1fHx8ZW58MHx8fHx8",
        pendingMsg: 6,
        location: "Aus,Sydney",
        userName: "Raquel",
        age: 22,
        bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, consequatur quos? Animi",
        hobbies: [
            {
                hobby: "Swim",
                icon: `<i class="ri-drop-fill"></i>`
            },
            {
                hobby: "Travel",
                icon: `<i class="ri-ancient-pavilion-fill"></i>`
            },
            {
                hobby: "Doodle",
                icon: `<i class="ri-pencil-fill"></i>`
            }
        ],
        isFriend: false
    },

]
let currPost = 0;
function select(elem) {
    return document.querySelector(elem);
}

function setData(currPost){
    select(".main-card-img img").src = userPost[currPost].profilePic;
    select(".nav-bar .dp-img img").src = userPost[currPost].profilePic;
    select(".badge-icon").textContent = userPost[currPost].pendingMsg;
    select(".location .place").textContent = userPost[currPost].location;
    select(".user-name h2").textContent = userPost[currPost].userName;
    select(".age").textContent = userPost[currPost].age;
    userPost[currPost].hobbies.forEach(function (hobby) {
        clutter += `<div class="interest">${hobby.icon} <span>${hobby.hobby}</span></div>`
    })
    select(".tags").innerHTML = clutter;
    clutter = "";
    select(".bio p").textContent = userPost[currPost].bio;
}
let clutter = "";
let isAnimating = false;
(function initial() {
    
    setData(currPost);
    select(".incoming-card-img img").src = userPost[currPost + 1].profilePic;
    currPost = 2;
})();



function changeImg() {
    if (!isAnimating) {
        isAnimating = true;
        let tl = gsap.timeline({
            onComplete: function () {
                isAnimating = false;
                let mainCard = select(".main-card-img");
                let incomingCard = select(".incoming-card-img");

                incomingCard.style.zIndex = 3;
                incomingCard.classList.remove("incoming-card-img");

                mainCard.style.zIndex = 2;
                gsap.set(mainCard, {
                    scale: 1,
                    opacity: 1
                })

                if (currPost === userPost.length) currPost = 0;
                select(".main-card-img img").src = userPost[currPost].profilePic;
                currPost++;
                mainCard.classList.remove("main-card-img");
                incomingCard.classList.add("main-card-img");
                mainCard.classList.add("incoming-card-img");
            }
        })
        tl.to(".main-card-img", {
            scale: 1.1,
            opacity: 0,
            ease: Circ,
            duration: .9
        }, "bkl")
            .from(".incoming-card-img", {
                scale: .9,
                opacity: 0,
                ease: Circ,
                duration: .5
            }, "bkl")
    }
}

document.querySelector(".post-btns")
    .addEventListener("click", function (dets) {
        if (dets.target.classList[0] === "cancel") {
            changeImg();
            setData(currPost-1);
            gsap.from(".details .element", {
                y: "100%",
                stagger: 0.06,
                ease: Power4.easeInOut,
                duration: .6
            })
        }
    })


function createContainers() {
    document.querySelectorAll(".element").forEach(function (elem) {
        let div = document.createElement("div");
        div.classList.add(`${elem.classList[1]}container`);
        div.style.overflow = "hidden";
        div.appendChild(elem);
        document.querySelector(".details").appendChild(div);
    })
}
createContainers()

