// data of all reels.
const reels = [
    {
        userName: "IShowSpeed",
        caption: "I THOUGHT I DIED IN ALGERIA!",
        reelVideo: "./reels/speed.mp4",
        likes: "3.2M",
        comments: "100K",
        shares: "10K",
        songName: "fuck off",
        isLiked: true,
        isFollowed: true,
        profileImg: "https://imgs.search.brave.com/p6Zng3J-egQedjRCnQXbT9L8moqakg40wHNMlO63Vdc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpHRTVOemd6/T0RZdFpEVTJNQzAw/TnpjMkxUa3hNekl0/TkRsbU4yRmlaRGsx/TWpNNVhrRXlYa0Zx/Y0djQC5qcGc"
    },

    {
        userName: "Ronaldo",
        caption: "best caption wins",
        reelVideo: "./reels/ronaldo.mp4",
        likes: "3M",
        comments: "20K",
        shares: "5K",
        songName: "Hey Mama",
        isLiked: true,
        isFollowed: false,
        profileImg: "https://imgs.search.brave.com/XlxrAMe0wrfPElhPPAT9vhlK7NHOVTapS_vFNRlxZJw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvY3Jp/c3RpYW5vLXJvbmFs/ZG8tY29vbC1wb3J0/dWdhbC1mb290YmFs/bGVyLThrY205aHBj/YzN4Z3RjYjcuanBn",
    },

    {
        userName: "jackson",
        caption: "rom rom bhaiyo",
        reelVideo: "./reels/puneet.mp4",
        likes: "3K",
        comments: "2K",
        shares: "1.5K",
        songName: "superstar",
        isLiked: false,
        isFollowed: false,
        profileImg: "https://imgs.search.brave.com/RPOW_sdHZ8RTfU390t3iQJCmmNVAlIeN40QkCylhTLc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/NjE5LzE0Mi9zbWFs/bC9kZWZhdWx0LWF2/YXRhci1wcm9maWxl/LWljb24tb2Ytc29j/aWFsLW1lZGlhLXVz/ZXItcGhvdG8taW1h/Z2UtdmVjdG9yLmpw/Zw",
    },

    {
        userName: "jethaJaatu",
        caption: "chup reha saatvi fail...",
        reelVideo: "./reels/jethalal.mp4",
        likes: "10K",
        comments: "300",
        shares: "2K",
        songName: "",
        isLiked: false,
        isFollowed: true,
        profileImg: "https://imgs.search.brave.com/0_silt3GLHpEhaRayPkSqs-d8RO1MdyIz2ZVc1vSiSM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2E2LzRh/LzcwL2E2NGE3MDcy/MzRhYTI3M2Q1YWMy/NzYwZjYxY2I4Zjli/LmpwZw",
    },

    {
        userName: "memesAdda",
        caption: "no caption needed",
        reelVideo: "./reels/meme.mp4",
        likes: "2.3K",
        comments: "217",
        shares: "302",
        songName: "",
        isLiked: false,
        isFollowed: false,
        profileImg: "https://imgs.search.brave.com/u-DTLeyFKOdSP6oXvto4Zwpm3GEeQm3Z13dX-X1QLtI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQw/NTk0NDAxL3Bob3Rv/L2JhbGFuY2luZy1j/YXQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUVFMVE4cDZZ/THBtRFk5RkJKYjZQ/SVFlNTdhcWpEeW53/cTA3MWNmdHNEVnM9",
    },
];

let allReels = document.querySelector(".all-reels"); // select the container in which all reels are present.
let currentReel = null; // to track which reel is playing.
let isMutedManually = false; // to track that user manually mute the reel.

// show all reels on frontend.
function showReels() {
    let clutter = "";
    reels.forEach(function (reel, index) {
        clutter += `<div class="reel" id="${index}">
                    <div class="reel-details">
                        <div class="reel-video">
                            <video id="myvideo${index}" autoplay loop muted src="${reel.reelVideo}"></video>
                        </div>

                        <div class="sound-btn">
                            <i class="ri-volume-up-fill vol-up"></i>
                            <i class="ri-volume-mute-fill vol-down hidden"></i>
                        </div>
                        <div class="play play-pause-btn${index}">
                            <i class="ri-play-large-fill"></i>
                        </div>

                        <div class="wrapper">
                            <div class="user">
                                <div class="user-profile">
                                    <div class="profile-img">
                                        <img src="${reel.profileImg}"
                            alt="">
                                    </div>
                                    <span class="user-name">${reel.userName}</span>
                                </div>

                                <div class="follow-btn">
                                    <span>${reel.isFollowed ? "Following" : "Follow"}</span>
                                </div>
                            </div>

                            <div class="caption">
                                <p>${reel.caption}</p>
                            </div>
                            
                            <div class="bars">
                                <div class="music-bar">
                                    <div class="bar">
                                        <i class="ri-music-2-fill"></i>
                                        <div class="song-name">${reel.songName === "" ? "Original Song" : reel.songName}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="reel-options">
                        <div class="likes option">
                            <i class="${reel.isLiked ? "ri-heart-fill isLiked" : "ri-heart-line"}"></i>
                            <span class="like-count count">${reel.likes}</span>
                        </div>

                        <div class="comments option">
                            <i class="ri-chat-3-line"></i>
                            <span class="comment-count count">${reel.comments}</span>
                        </div>

                        <div class="shares option">
                            <i class="ri-send-ins-line"></i>
                            <span class="share-count count">${reel.shares}</span>
                        </div>

                        <div class="save option">
                            <i class="ri-bookmark-line"></i>
                        </div>

                        <div class="mores option">
                            <i class="ri-more-line"></i>
                        </div>

                        <div class="music-player option">
                            <img src="https://plus.unsplash.com/premium_photo-1661714125593-5ff90eb82516?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHBlb3BsZSUyMG9uJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D"
                            alt="">
                        </div>
                    </div>
                </div>`
    })

    document.querySelector(".all-reels").innerHTML = clutter;
    clutter = "";
}
showReels();

// this observe reel scroll.
const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        const intersect = entry.isIntersecting;
        if (intersect) {
            if (currentReel !== null && currentReel !== entry.target) {
                currentReel.pause();
                currentReel.currentTime = 0;
            }
            entry.target.play();
            entry.target.muted = isMutedManually;
            currentReel = entry.target;
            document.querySelector(`.play-pause-btn${currentReel.closest(".reel").id}`).classList.add("hidden");
        } else {
            entry.target.pause();
        }
    })
}, { threshold: 0.7 });

// adding observer to all reels.
let reel = document.querySelectorAll(".reel .reel-details video");
reel.forEach(function (elem) {
    observer.observe(elem);
})

// this function mute and unmute reel also change icon of sound.
function mutedUnmute() {
    const Reels = document.querySelectorAll(".reel video");
    const allSoundBtns = document.querySelectorAll(".sound-btn");
    if (isMutedManually) {
        for (let i = 0; i < Reels.length; i++) {
            Reels[i].muted = isMutedManually;
            allSoundBtns[i].querySelector(".vol-down").classList.remove("hidden");
            allSoundBtns[i].querySelector(".vol-up").classList.add("hidden");
        }
    } else {
        for (let i = 0; i < Reels.length; i++) {
            Reels[i].muted = isMutedManually;
            allSoundBtns[i].querySelector(".vol-down").classList.add("hidden");
            allSoundBtns[i].querySelector(".vol-up").classList.remove("hidden");
        }
    }
}

// the function inside object chacha will run when user clicks on that specific places.
let chacha = {
    "sound-btn": function () {
        if (!isMutedManually) {
            isMutedManually = true;
            mutedUnmute();
        } else {
            isMutedManually = false;
            mutedUnmute();
        }
    },
    "likes": function (clickedElem) {
        let reel = reels[Number(clickedElem.closest(".reel").id)];
        if (reel.isLiked) {
            reel.isLiked = false;
            clickedElem.innerHTML = `<i class="${reel.isLiked ? "ri-heart-fill isLiked" : "ri-heart-line"}"></i>
                            <span class="like-count count">${reel.likes}</span>`
        } else {
            reel.isLiked = true;
            clickedElem.innerHTML = `<i class="${reel.isLiked ? "ri-heart-fill isLiked" : "ri-heart-line"}"></i>
                            <span class="like-count count">${reel.likes}</span>`
        }
    },
    "follow-btn": function (clickedElem) {
        let reel = reels[Number(clickedElem.closest(".reel").id)];
        if (reel.isFollowed) {
            reel.isFollowed = false;
            clickedElem.childNodes[1].innerText = "Follow";
        } else {
            reel.isFollowed = true;
            clickedElem.childNodes[1].innerText = "Following";
        }
    },
    "reel-video": function (clickedElem) {
        if (clickedElem.childNodes[1].paused) {
            clickedElem.childNodes[1].play();
            document.querySelector(`.play-pause-btn${clickedElem.closest(".reel").id}`).classList.add("hidden");
        } else {
            clickedElem.childNodes[1].pause();
            document.querySelector(`.play-pause-btn${clickedElem.closest(".reel").id}`).classList.remove("hidden");
        }
    }
}

// listen the user click and do something on the basis of where he click.
allReels.addEventListener("click", function (dets) {
    const clickedElem = dets.target.parentElement;
    chacha[ clickedElem.classList[0] ](clickedElem);
})