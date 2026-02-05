const notes = [
    { key: "KeyZ", sound: "./music/28.mp3" },
    { key: "KeyS", sound: "./music/29.mp3" },

    { key: "KeyX", sound: "./music/30.mp3" },
    { key: "KeyD", sound: "./music/31.mp3" },

    { key: "KeyC", sound: "./music/32.mp3" },

    { key: "KeyQ", sound: "./music/33.mp3" },
    { key: "Digit2", sound: "./music/34.mp3" },

    { key: "KeyW", sound: "./music/35.mp3" },
    { key: "Digit3", sound: "./music/36.mp3" },

    { key: "KeyE", sound: "./music/37.mp3" },
    { key: "Digit4", sound: "./music/38.mp3" },

    { key: "KeyR", sound: "./music/39.mp3" },

    { key: "KeyT", sound: "./music/40.mp3" },
    { key: "Digit6", sound: "./music/41.mp3" },

    { key: "KeyY", sound: "./music/42.mp3" },
    { key: "Digit7", sound: "./music/43.mp3" },

    { key: "KeyU", sound: "./music/44.mp3" },

    { key: "KeyI", sound: "./music/45.mp3" },
    { key: "Digit9", sound: "./music/46.mp3" },

    { key: "KeyO", sound: "./music/47.mp3" },
    { key: "Digit0", sound: "./music/48.mp3" },

    { key: "KeyP", sound: "./music/49.mp3" },

    { key: "BracketLeft", sound: "./music/50.mp3" },
    { key: "Minus", sound: "./music/51.mp3" },

    { key: "BracketRight", sound: "./music/52.mp3" },

    { key: "KeyV", sound: "./music/53.mp3" },
    { key: "KeyF", sound: "./music/54.mp3" },

    { key: "KeyB", sound: "./music/55.mp3" },
    { key: "KeyG", sound: "./music/56.mp3" },

    { key: "KeyN", sound: "./music/57.mp3" },
    { key: "KeyJ", sound: "./music/58.mp3" },

    { key: "KeyM", sound: "./music/59.mp3" },
    { key: "KeyK", sound: "./music/60.mp3" },

    { key: "Comma", sound: "./music/61.mp3" },
    { key: "KeyL", sound: "./music/62.mp3" },

    { key: "Period", sound: "./music/63.mp3" }
]

const mixer = new Audio();
document.body.addEventListener("keydown",function(dets){
    notes.forEach(function(elem){
        if(elem.key === dets.code){
            document.getElementById(elem.key).classList.add("pressed");
            mixer.src = elem.sound;
            mixer.currentTime = 0;
            mixer.play();
            return;
        }
        
    })
})

document.body.addEventListener("keyup",function(dets){
    document.getElementById(dets.code).classList.remove("pressed");
})

document.querySelector(".white-keys").addEventListener("mousedown",function(dets){
    for(let i = 0;i<notes.length;i++){
        if(notes[i].key === dets.target.id){
            document.getElementById(dets.target.id).classList.add("pressed");
            mixer.src = notes[i].sound;
            mixer.currentTime = 0;
            mixer.play();
            break;
        }
    }
})
document.querySelector(".white-keys").addEventListener("mouseup",function(dets){
    document.getElementById(dets.target.id).classList.remove("pressed");
})