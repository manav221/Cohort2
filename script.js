let users = [
    {userName:"elliot parkison",profession:"Cyber Security",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, fugit?",profileImg:"https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsfGVufDB8fDB8fHww"},

    {userName:"shardha kapoor",profession:"FullStack Developer",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, fugit?",profileImg:"https://plus.unsplash.com/premium_photo-1682095757120-c9abb908ed60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D"},

    {userName:"mr robot",profession:"Ai/Ml Engineer",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, fugit?",profileImg:"https://plus.unsplash.com/premium_photo-1661775820832-f971657b13f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsfGVufDB8fDB8fHww"},

    {userName:"sarthak sharma",profession:"Data Scientist",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, fugit?",profileImg:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1vZGVsfGVufDB8fDB8fHww"},

    {userName:"harsh beniwal",profession:"Frontend Developer",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, fugit?",profileImg:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1vZGVsfGVufDB8fDB8fHww"}
];


let clutter = "";
users.forEach(function(user){
    clutter += `<div class="card">
                <div class="card-img">
                    <img src="${user.profileImg}" alt="">
                </div>
                <div class="details">
                    <h2 class="name">
                        ${user.userName}
                    </h2>
                    <h4 class="profession">
                        ${user.profession}
                    </h4>
                    <p class="description">${user.description}</p>
                </div>
            </div>`
})

let allcards = document.querySelector(".cards");
allcards.innerHTML = clutter;
clutter = "";

