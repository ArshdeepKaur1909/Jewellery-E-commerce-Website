// Selecting all shopping carts icons
let addToCart = document.querySelectorAll(".addToCart"); 

// Applying event listener to each icon --> using click event listener --> this only works in normal function
for(let i = 0; i<addToCart.length; i++){
    addToCart[i].addEventListener("click", function(){
    this.style.color = "green";
    // using closest we directly access card div of clicked icon
    let card = this.closest(".card"); 
    // objectifying image, name of product, price of product of card div
    let image =   card.querySelector("img"); // card.children[0] ;
    let name = card.children[1].children[0];
    let price = card.children[1].children[1];
   
    // Making product object w.r.t. each product
    let product = {
      image: image.src,
      name: name.innerText,
      price: price.firstChild.textContent
    };
    // Making Cart Array for first product and for rest of products accessing it from local storage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    // Pushing product object in cart Array
    cart.push(product);
    // Storing Cart in Local Storage
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product is added to cart");
  })
}

//Selecting images of each card of collection div
let images = document.querySelectorAll(".card-img-top");

// Applying event listener to each image
images.forEach(function(image){
   image.addEventListener("click", function(){
    let card = this.closest(".card"); 

    let image =   card.querySelector("img"); // card.children[0] ;
    let p1 = card.children[1].children[0];
    let p2 = card.children[1].children[1];

    let src = image.src;
    let name = p1.innerText;
    let price = p2.firstChild.textContent;

    
   })
});