let products = [
    {name:"Kevin Sofa",description:"very softy and light",price:"15,000",image:"https://images.unsplash.com/photo-1684165610413-2401399e0e59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNvZmF8ZW58MHx8MHx8fDA%3D"},

    {name:"Round Chair",description:"Best for Office",price:"5,000",image:"https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},

    {name:"Kari Chair",description:"Morden Chair of House",price:"6,500",image:"https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoYWlyfGVufDB8fDB8fHww"},
];

let popularProducts = [
    {name:"Kari Chair",description:"Morden Chair of House",price:"6,500",image:"https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoYWlyfGVufDB8fDB8fHww"},

    {name:"Kevin Sofa",description:"very softy and light",price:"15,000",image:"https://images.unsplash.com/photo-1684165610413-2401399e0e59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNvZmF8ZW58MHx8MHx8fDA%3D"},
]


function addProduct(products){
    let clutter = "";
    let productCards = document.querySelector(".product-cards");

    products.forEach(function(product,indx){
        clutter += `<div class="card">
                            <div class="product-img">
                                <img src="${product.image}" alt="">
                            </div>
    
                            <div class="bottom">
                                <div class="product-details">
                                    <h2 class="product-name">${product.name}</h2>
                                    <h4 class="product-description">${product.description}</h4>
                                    <h3 class="product-price">$${product.price}</h3>
                                </div>
    
                                <div data-index="${indx}" class="add add-to-cart">
                                    <i data-index="${indx}" class="ri-add-line add"></i>
                                </div>
                            </div>
                        </div>`
    
    })
    
    productCards.innerHTML = clutter;
    clutter = "";
}

function showPopularProducts(popularProducts){
    let clutter = "";
    popularProducts.forEach(function(popular){
        clutter += `<div class="popular-card">
                        <div class="popular-product-img">
                            <img src="${popular.image}" alt="">
                        </div>

                        <div class="details">
                            <div class="product-name">
                                <h2>${popular.name}</h2>
                                <h3 class="product-description">${popular.description}</h3>
                            </div>
                            
                            <div class="product-price">
                                <h4>$${popular.price}</h4>
                            </div>
                        </div>
                    </div>`
    })

    document.querySelector(".popular-products-cards").innerHTML = clutter;
    clutter = "";
}

let cart = [];
function addToCart(){
    let product = document.querySelector(".product-cards");
    product.addEventListener("click",function(event){
        if(event.target.classList.contains("add")){
            cart.push(products[Number(event.target.dataset.index)])
        }
    })
}


function showCart(){
    let usrCart = document.querySelector('.cartIcon');
    let cartDiv = document.querySelector(".cart");
    let clutter = "";
    usrCart.addEventListener("click",function(){
        cartDiv.style.display = "flex";
    
        cart.forEach(function(product){
            clutter += `<div class="product">
                    <div class="product-img">
                        <img src="${product.image}" alt="">
                    </div>
                    <div class="details">
                        <h2 class="product-name">${product.name}</h2>
                        <h4 class="product-price">$${product.price}</h4>
                    </div>
                </div>`
        })
    
        cartDiv.innerHTML = clutter;
        clutter = "";
    })
}




addProduct(products);
showPopularProducts(popularProducts);
addToCart();
showCart();