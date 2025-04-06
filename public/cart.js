let collection = document.querySelector(".collection");
document.addEventListener("DOMContentLoaded", function(){
    let cart = JSON.parse(localStorage.getItem('cart'));
    let total = 0;
    // code for adding elements of cart on cart-page
    for(let i = 0; i<cart.length; i++){
        let priceStr = cart[i].price;
        let price = parseInt(priceStr.replace("$", ""));
        total += price;
        let div = document.createElement("div");
        div.classList.add('card');
        div.setAttribute('data-name', cart[i].name);
        div.innerHTML = `<img src="${cart[i].image}" class="card-img-top">
                    <div class="card-body" style="background-color: #9D9689;">
                    <p>${cart[i].name}</p>
                    <p style=" font-size: 100px; font-weight: 700;">${cart[i].price}<i class="fa-solid fa-trash delete"></i>
                    </div>`;
        collection.appendChild(div);
    }
    // code for setting the value of total button
    let p = document.querySelector(".total");
    p.childNodes[1].textContent = `$${total}`;
    // code for functionality of remove Buttons
    let removeBtns = document.querySelectorAll(".delete");
    removeBtns.forEach((btn) => {
    btn.addEventListener("click", function(){
      let card = this.closest(".card");
      let name = card.getAttribute('data-name');
      // removing it from cart page
      card.remove();
      // removing from local storage
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      let updatedCart = cart.filter((item) => { return item.name != name});
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      // removing price from total
      let price = card.children[1].children[1].firstChild.textContent;
      total -= parseInt(price.replace("$", ""));
      let p = document.querySelector(".total");
      p.childNodes[1].textContent = `$${total}`;
      // alert for removed product
      alert("Product is removed from cart");
    });
});
});