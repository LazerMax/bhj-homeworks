let listBtnsPlus =  [...document.querySelectorAll(".product__quantity-control_inc")];
let listBtnsMinus = [...document.querySelectorAll(".product__quantity-control_dec")];
let listBtnsAdd = [...document.querySelectorAll(".product__add")];
let cart = document.querySelector(".cart__products");

listBtnsMinus.forEach(e => {
    e.addEventListener("click", el => {
        let control = el.target.closest(".product__quantity-controls");
        let value = control.querySelector(".product__quantity-value").textContent;
        if(value > 1) {
            --value;
           control.querySelector(".product__quantity-value").innerHTML = value;
        }
    });
});

listBtnsPlus.forEach(e => {
    e.addEventListener("click", el => {
        let control = el.target.closest(".product__quantity-controls");
        let value = control.querySelector(".product__quantity-value").textContent;
        ++value;
        control.querySelector(".product__quantity-value").innerHTML = value;
    });
});

listBtnsAdd.forEach(e => {
    e.addEventListener("click", el => {
        let control = el.target.closest(".product");
        let id = control.getAttribute("data-id");
        let image = control.querySelector(".product__image").getAttribute("src");
        let count = control.querySelector(".product__quantity-value").textContent;
        let cartProducts = [...cart.querySelectorAll(".cart__product")];
        let allId = [];
        cartProducts.forEach(elem => {allId.push(elem.getAttribute("data-id"))});
        if(allId.includes(id)){;
           let value = parseInt(cartProducts[id-1].querySelector(".cart__product-count").textContent, 10);
           value += parseInt(count,10);
           cartProducts[id-1].querySelector(".cart__product-count").textContent = value;
        }
        else{
            cart.innerHTML += `
                    <div class="cart__product" data-id="${id}">
                        <img class="cart__product-image" src="${image}">
                         <div class="cart__product-count">${count}</div>'
                        </div>`;
        }
    });
})