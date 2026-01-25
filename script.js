let main = document.querySelector("main");
let faq = document.querySelectorAll(".faq");
let quest = document.querySelectorAll(".quest");
let answer = document.querySelector(".answer");



quest.forEach(function(val){
    val.addEventListener("click",function(){
        let ans = val.parentElement.querySelector(".answer");
        let i = val.querySelector("i");
        let isOpen = ans.style.display === "block";

        document.querySelectorAll(".answer").forEach(function(ans){
            ans.style.display = "none";
            val.style.borderBottomLeftRadius = "1rem";
            val.style.borderBottomRightRadius= "1rem";
            i.style.display = "none";
        })

        if(!isOpen){
            ans.style.display = "block";
            val.style.borderBottomLeftRadius = 0;
            val.style.borderBottomRightRadius= 0;
            i.style.display = "block"
        }
})
})