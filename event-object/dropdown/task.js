let menuList = [...document.querySelectorAll('.dropdown__item')];
let dropDown = document.querySelector(".dropdown");
let menu = document.querySelector(".dropdown__list");

dropDown.addEventListener('click', e => {
    e.preventDefault();
    menu.classList.toggle("dropdown__list_active");
});


menuList.forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault();
        let text = e.target.textContent;
        document.querySelector(".dropdown__value").textContent = text;
    });
});




