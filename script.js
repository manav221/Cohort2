let teams = [
    {
        teamName:"CSK",
        primary:"yellow",
        secondary:"#0066B3",
        fullName:"Chennai Super Kings",
        trophies:5,
        captain:"MSD"
    },
    {
        teamName:"MI",
        primary:"blue",
        secondary:"#FFD141",
        fullName:"Mumbai Indians",
        trophies:5,
        captain:"Rohit Sharma"
    },
    {
        teamName:"RR",
        primary:"rgb(222, 13, 128)",
        secondary:"blue",
        fullName:"Rajasthan Royals",
        trophies:1,
        captain:"Sanju Samson"
    },
    {
        teamName:"RCB",
        primary:"Red",
        secondary:"navyblue",
        fullName:"Royal Challenger Bengaluru",
        trophies:1,
        captain:"Virat Kholi"
    },
    {
        teamName:"KKR",
        primary:"purple",
        secondary:"white",
        fullName:"Kolkata Knight Riders",
        trophies:2,
        captain:"Rinku Singh"
    }

]



let teamBox = document.querySelector(".box");
let teamDetails = document.querySelector(".details");
let btn = document.querySelector("button");


btn.addEventListener("click",function(){
    let randomIndex = Math.floor(Math.random() * teams.length);
    teamBox.innerHTML = teams[randomIndex].teamName;
    teamBox.style.backgroundColor = teams[randomIndex].primary
    teamDetails.style.backgroundColor = teams[randomIndex].secondary
    let clutter = "";
    let props = ["fullName","trophies","captain"];
    for(let i = 0;i<props.length;i++){
        for(let key in teams[randomIndex]){
            if(key === props[i]){
                clutter += `<div>${teams[randomIndex][key]}</div>`;
            }
        }
    }
    teamDetails.innerHTML = clutter;
})