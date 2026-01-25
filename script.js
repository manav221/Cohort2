let main = document.querySelector("main");
let faq = document.querySelectorAll(".faq");
let quest = document.querySelectorAll(".quest");
let answer = document.querySelector(".answer");

let isOpen = false;
let temp;
quest.forEach(function(val){
    val.addEventListener("click",function(event){
        let ans = event.target.parentElement.querySelector("div.answer");
        if(!isOpen){
            ans.style.display = "block";
            val.style.borderBottomLeftRadius = 0;
            val.style.borderBottomRightRadius = 0;
            isOpen = true;
            temp = ans;
        }else if(isOpen && ans === temp){
            ans.style.display = "none";
            val.style.borderRadius = "1rem";
            isOpen = false;
        }
        else{
            temp.style.display = "none";
            val.style.borderRadius = "1rem";
            isOpen = false;
            val.click();
        }
    })

    val.children[1].addEventListener("click",function(event){
        if(isOpen){
            let parent = event.target.parentElement.parentElement;
            parent.querySelector("div.answer").style.display = 'none';
            isOpen = false;
        }
    })
})

