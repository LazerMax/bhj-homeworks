const modalWindow = document.querySelector('.modal');
let btnClose = document.querySelector('.modal__close');

window.onload = f => {
    if(!(document.cookie)){
        modalWindow.classList.add("modal_active");
    }
}

if(btnClose) {
    btnClose.addEventListener("click", e => {
        document.cookie = 'window=closed';
        modalWindow.classList.remove("modal_active");
    });
}
