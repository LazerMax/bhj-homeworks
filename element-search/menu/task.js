let menuList = [...document.querySelectorAll('.menu_sub')];

document.addEventListener('click', e => {
  if(e.target.closest(".menu__item").querySelector(".menu_sub")){
    e.preventDefault();
    if(e.target.closest(".menu__item").querySelector(".menu_active")) {
      e.target.closest(".menu__item").querySelector(".menu_sub").classList.remove("menu_active");
    }else{
      menuList.forEach(el_menu => el_menu.classList.remove("menu_active"));
      e.target.closest(".menu__item").querySelector(".menu_sub").classList.add("menu_active");
    }
  }
});

