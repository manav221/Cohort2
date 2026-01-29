let appContent = [
    {postName:"Nature",image:"https://i.pinimg.com/736x/02/59/69/0259699a168aea21ba838cd4873a1fdc.jpg"},

    {postName:"nature house",image:"https://i.pinimg.com/736x/07/a3/05/07a305f688f4afbf5a1d9830f1e24184.jpg"},

    {postName:"los angles night",image:"https://images.unsplash.com/photo-1514439827219-9137a0b99245?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9zJTIwYW5nZWxlcyUyMG5pZ2h0fGVufDB8fDB8fHww"},

    {postName:"deer",image:"https://images.unsplash.com/photo-1484406566174-9da000fda645?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D"},

    {postName:"library",image:"https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGVhcm5pbmd8ZW58MHx8MHx8fDA%3D"},

    {postName:"flowers",image:"https://images.unsplash.com/photo-1460039230329-eb070fc6c77c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D"},

    {postName:"tech",image:"https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHRlY2h8ZW58MHx8MHx8fDA%3D"}
]

function showCards(arr){
    let posts = document.querySelector(".posts");
    arr.forEach(function(post,indx){
        let div = document.createElement("div",`post-${indx+1}`);
        div.classList.add("post",`post-${indx}`);

        let photo = document.createElement('img');
        photo.src = post.image;
        
        div.appendChild(photo);
        posts.appendChild(div);
    })
}

function handleSearch(){
    let inp = document.querySelector("input");
    let overlay = document.querySelector(".overlay");
    let showSuggestions = document.querySelector(".suggestions");

    inp.addEventListener("focus",function(){
        overlay.style.display = "block";
        showSuggestions.style.display = "block";
    })
    
    inp.addEventListener("blur",function(){
        overlay.style.display = "none";
        showSuggestions.style.display = "none";
    })

    inp.addEventListener("input",function(){
        let showSuggestions = document.querySelector(".suggestions");
        let clutter = "";
        let filteredArr = appContent.filter(function(post,indx){
            if(inp.value === ""){
                return false;
            }else{
                return post.postName.toLowerCase().startsWith(inp.value);
            }
        })

        filteredArr.forEach(function(post){
            clutter += `<div class="suggest">
                            <i class="ri-search-line search-icon"></i>
                            <h3>${post.postName}</h3>
                        </div>`;
        })
        
        showSuggestions.innerHTML = clutter;
        clutter = "";
    })
}

showCards(appContent);
handleSearch();