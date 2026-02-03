let songs = [
    { songName: "Lut le Gaya", artist: "Ranveer singh", songPosterImg: "https://imgs.search.brave.com/W8COkquhKhDL2WX672n7a4pWM9EkJ5X2kDJa7VR-FuY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZXRpbWcuY29tL3Ro/dW1iL21zaWQtMTI3/Nzc2Njg5LHdpZHRo/LTY1MCxoZWlnaHQt/NDg4LGltZ3NpemUt/Mjk4NzQscmVzaXpl/bW9kZS03NS9yYW52/ZWVyLXNpbmdocy1k/aHVyYW5kaGFyLXRv/LXN0cmVhbS1vbmxp/bmUuanBn", songLink: "./songs/lutLayGaya.mp3" },

    { songName: "Pasa hai toh", artist: "Raj&Dk", songPosterImg: "https://imgs.search.brave.com/PrveYgWMMNCIFrFVS-oW-A6gBnpo4fVK_uyrkOUwDBY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9taXIt/czMtY2RuLWNmLmJl/aGFuY2UubmV0L3By/b2plY3RzLzQwNC82/ZTMzOGUxNjI5NjE1/NDEuWTNKdmNDd3pN/REk1TERJek5qa3NN/VFF6T1N3eE1UVTAu/anBn", songLink: "./songs/pasa\ hai\ toh.mp3" },

    { songName: "Airtel phonk", artist: "Boka14", songPosterImg: "https://imgs.search.brave.com/ZbcPIdb_pVWGSdCY-hLJ8XUoFVhi6GDO0sP6RBYWcAE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS9D/NXAza3VuRnQyQS9z/ZGRlZmF1bHQuanBn", songLink: "/songs/airtel\ phonk.mp3" },

    { songName: "Mask off", artist: "Future", songPosterImg: "https://imgs.search.brave.com/RBpGbEyngU6mE-tyJW0gq-YOZztmMigsSdga65KRftw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9l/L2VhL0lTaG93U3Bl/ZWRfYXRfQ2hpbmF0/b3duXyhQb3J0cmFp/dClfMDQuanBn", songLink: "./songs/mask\ off.mp3" },

    { songName: "Bargad", artist: "Arpit bala", songPosterImg: "https://imgs.search.brave.com/7m2apt2WGzxmoUQG7cZx6_qsmfgQ08Lzng1x1q46MQk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9leHRl/cm5hbC1wcmV2aWV3/LnJlZGQuaXQvc3Vm/ci1hcnBpdC1iYWxh/LXRvb3Jqby1kZXkt/YmFyZ2FkLXYwLUhq/UG9XZnZBeG5DVk13/TXdSNXpIVjlydllr/VGZpeTdsT21ZLWJy/eHV0WEkuanBlZz93/aWR0aD02NDAmY3Jv/cD1zbWFydCZhdXRv/PXdlYnAmcz05NjUz/NWI0MmFiOGY0OGI3/MDFjYjkxODRmMjQ5/YzhiNDQ0NGNhM2Nk", songLink: "./songs/bargad.mp3" },

    { songName: "Don omar", artist: "Unknown", songPosterImg: "https://imgs.search.brave.com/_PgH9sMTv7-ziI2BpUWCUhxdAs-PcT-Z-rJ1bmncraE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTEy/MzkxNjMzL3Bob3Rv/L2Rvbi1vbWFyLWR1/cmluZy1wcmVtaW8t/anV2ZW50dWQtYXdh/cmRzLWJhY2tzdGFn/ZS1hdC11bml2ZXJz/aXR5LW9mLW1pYW1p/LWJhbmt1bml0ZWQt/Y2VudGVyLWluLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz02/dEhZcXZ6UXpXT1po/S2ZRdTZWOTE1ZTZl/NEVsUHRHaHQ4cURL/VG9yQ3MwPQ", songLink: "./songs/don\ omar.mp3" },

    { songName: "Sau thara ka", artist: "Arjit singh", songPosterImg: "https://imgs.search.brave.com/L57efYe2VSQARqIFCNTyV0SdneEplPbcsnfVSZwEUCQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/bmV3LWFsbGVnYXRp/b25zLWFnYWluc3Qt/YWtzaGF5ZS1raGFu/bmEtd2h5LWlzLWhl/LWJlaW5nLXYwLWRm/Zzdhcmo2OW9hZzEu/anBnP3dpZHRoPTY0/MCZjcm9wPXNtYXJ0/JmF1dG89d2VicCZz/PTExYzM2NmUzOGNi/ZjgxNzNmN2U0MjZm/MDNmMmNhOTFkNDg0/NGZjYTQ", songLink: "./songs/sau\ tahara\ ka.mp3" },
]


function showSongs() {
    let clutter = "";
    let allSongs = document.querySelector(".all-songs");

    songs.forEach(function (song, indx) {
        clutter += `<div data-index="${indx} "class="song">
                <div data-index="${indx} "class="song-details">
                    <div class="song-img">
                        <img  src="${song.songPosterImg}" alt="" data-index="${indx}">
                    </div>

                    <div data-index="${indx} "class="song-artist-title">
                        <span data-index="${indx} "class="song-name">${song.songName}</span>
                        <span data-index="${indx} "class="artist">${song.artist}</span>
                    </div>

                </div>
                <div class="more-icon">
                    <i class="ri-more-2-line"></i>
                </div>

            </div>`
    })

    clutter = `${clutter} <div class="player hidden">
                <div class="song-img">
                    <img src="https://imgs.search.brave.com/0Asw-H0lQ3zbmSj3fdhIzvEmRUp9DhNaVZ0Pq-E9svE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg3/NDQ2ODg4Ny9waG90/by9uZXcteW9yay1u/ZXcteW9yay10cmF2/aXMtc2NvdHQtYXR0/ZW5kcy10cmF2aXMt/c2NvdHQtY29uY2Vy/dC1hZnRlci1wYXJ0/eS1hdC1oYXJib3It/bmV3LXlvcmsuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUt1/WVNkY1NVckZaNkJ6/TjhZWlpGZGFMaHAt/TGtQdVNOdkpNNVBC/WjJBVjQ9"
                        alt="">
    
                    <div class="play-pause">
                        <i class="ri-play-fill play"></i>
                        <i class="ri-pause-line pause"></i>
                    </div>
                </div>
    
                <div class="song-controls">
                    <div class="controls">
                        <i class="ri-skip-back-fill previous skip"></i>
                        <div class="song-artist-title">
                            <span class="song-name"></span>
                            <span class="artist"></span>
                        </div>
                        <i class="ri-skip-forward-fill next skip"></i>
                    </div>
    
                    <div class="seek-bar">
                        <div class="time">
                            <span class="current-time">1:10</span>
                            <span class="duration">3:40</span>
                        </div>
                        <input type="range" min="0" max="100" class="progress-bar">
    
                    </div>
                </div>
    
    
            </div>`
    allSongs.innerHTML = clutter;
    clutter = "";
}

function playSong() {
    const mixer = new Audio();

    const allSongs = document.querySelector(".all-songs");
    const player = document.querySelector(".player");
    const songImg = document.querySelector(".player .song-img");
    const imgPlayer = document.querySelector(".player .song-img img");
    const songCreator = document.querySelector(".player .artist");
    const song = document.querySelector(".player .song-name");
    const progressBar = document.querySelector(".progress-bar");
    progressBar.value = 0;



    const temp = {};// for next & previous song.
    let isPlay = false; // checking state of song play - pause.
    let curTime = null; // store current time of song to play song next time from that point of time if the user pause and play it again.

    // changing icon on song play or pause.
    function play_pause(isPlay) {
        if (!isPlay) {
            document.querySelector(".pause").classList.add("hidden");
            document.querySelector(".play").classList.remove("hidden");
        } else {
            document.querySelector(".pause").classList.remove("hidden");
            document.querySelector(".play").classList.add("hidden");
        }
    }

    // showing current time and duration of song.
    function showSongTime(obj) {
        let currenttime = document.querySelector(".current-time");
        let songDuration = document.querySelector(".duration");

        let min = Math.floor((mixer.duration) / 60).toString().padStart(2, '0');
        let sec = Math.floor((mixer.duration) % 60).toString().padStart(2, '0');

        currenttime.textContent = `${obj.minutes.toString().padStart(2, '0')}:${obj.seconds.toString().padStart(2, '0')}`;
        songDuration.textContent = `${min}:${sec}`;
    }

    // getting song current time.
    mixer.addEventListener("timeupdate", function () {
        curTime = Math.floor(mixer.currentTime);
        let minutes = Math.floor(curTime / 60);
        let seconds = (curTime % 60);
        showSongTime({ curTime, minutes, seconds });

        // updating seekbar
        progressBar.max = Math.floor(mixer.duration);
        progressBar.value = curTime;
        progressBar.step = 1;
    })

    // if user click on seekbar to move song forward and backward.
    progressBar.addEventListener("input", function () {
        mixer.currentTime = progressBar.value;
    })

    // playing song on which user click.
    allSongs.addEventListener("click", function (dets) {
        if (typeof dets.target.dataset.index !== "undefined") {
            let index = Number(dets.target.dataset.index);

            player.classList.remove("hidden");


            let { songName, artist, songPosterImg, songLink } = songs[index];
            imgPlayer.src = songPosterImg;
            songCreator.textContent = artist;
            song.textContent = songName;

            mixer.src = songLink;
            temp.song = songs[index];
            temp.songNo = index;
            mixer.play();
            isPlay = true;
            play_pause(isPlay);
        }
    })

    // playing and pausing song on click of song image in player.
    songImg.addEventListener("click", function (dets) {
        dets.stopPropagation();

        if (!isPlay) {
            mixer.src = temp.song.songLink;
            mixer.play();
            mixer.currentTime = curTime;
            isPlay = true;
            play_pause(isPlay);
        } else {
            mixer.pause();
            isPlay = false
            play_pause(isPlay);
        }
    })


    // playing and pausing song on press of spacebar key.
    window.addEventListener("keydown", function (dets) {
        if (dets.key === ' ') {
            songImg.click();
        }
    })

    // playing next song.
    let nextBtn = document.querySelector(".next");
    nextBtn.addEventListener("click", function () {
        let currentSongNo = temp.songNo;
        if (currentSongNo < songs.length - 1) {
            let nextSong = songs[currentSongNo + 1];
            let { songName, artist, songPosterImg, songLink } = nextSong;
            imgPlayer.src = songPosterImg;
            songCreator.textContent = artist;
            song.textContent = songName;
            mixer.src = songLink;
            mixer.play();
            isPlay = true;
            play_pause(isPlay);
            temp.song = nextSong;
            temp.songNo = currentSongNo + 1;
        }
    })

    // playing previous song.
    let previousBtn = document.querySelector(".previous");
    previousBtn.addEventListener("click", function () {
        let currentSongNo = temp.songNo;
        if (currentSongNo > 0) {
            let previousSong = songs[currentSongNo - 1];
            let { songName, artist, songPosterImg, songLink } = previousSong;
            imgPlayer.src = songPosterImg;
            songCreator.textContent = artist;
            song.textContent = songName;
            mixer.src = songLink;
            mixer.play();
            isPlay = true
            play_pause(isPlay);
            temp.song = previousSong;
            temp.songNo = currentSongNo - 1;
        }
    })

}

showSongs();
playSong();