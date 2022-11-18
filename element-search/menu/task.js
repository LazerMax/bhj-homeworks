let menuList = [...document.querySelectorAll('.menu_sub')];
let menuWindow = document.querySelector(".menu");

menuWindow.addEventListener('click', e => {
  if(e.target.closest(".menu__item").querySelector(".menu_sub")){
    e.preventDefault();
    if(e.target.closest(".menu__item").querySelector(".menu_active")) {
      e.target.closest(".menu__item").querySelector(".menu_sub").classList.remove("menu_active");
    }else{
      menuList.forEach(elMenu => elMenu.classList.remove("menu_active"));
      e.target.closest(".menu__item").querySelector(".menu_sub").classList.add("menu_active");
    }
  }
});

