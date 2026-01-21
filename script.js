let quotes = [
    "Aaj kamayin ga toh kal khayin ga",
    "Ma nhi toh kon bae",
    "America kya kheta tha",
    "Aasan haiii",
    "Oo bhosdi waiter"
]


let main = document.querySelector("main");
let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let x = Math.random() * 100;
    let y = Math.random() * 100;
    let rotation = Math.random() * 360;
    let scl = Math.random() * 3;
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let h1 = document.createElement('h1');

    h1.innerHTML = quotes[randomIndex];

    h1.style.color = "#fff";
    h1.style.position = "absolute";
    h1.style.top = y + "%";
    h1.style.left = x + "%";
    h1.style.rotate = `${rotation}deg`;
    h1.style.scale = scl;
    h1.style.color = `rgb(${red},${green},${blue})`
    main.appendChild(h1);
})