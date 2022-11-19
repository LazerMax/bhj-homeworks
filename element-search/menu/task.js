let menuList = [...document.querySelectorAll('.menu_sub')];
let menuWindow = document.querySelector(".menu");

menuWindow.addEventListener('click', e => {
  let menu = e.target.closest(".menu__item");
  if(menu) {
    if (menu.querySelector(".menu_sub")) {
      e.preventDefault();
      if (menu.querySelector(".menu_active")) {
        menu.querySelector(".menu_sub").classList.remove("menu_active");
      } else {
        menuList.forEach(elMenu => elMenu.classList.remove("menu_active"));
        menu.querySelector(".menu_sub").classList.add("menu_active");
      }
    }
  }
});

