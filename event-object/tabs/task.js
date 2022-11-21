let tabNavigationList  = [...document.querySelectorAll('.tab')];
let tabNavigationElement = document.querySelector(".tab__navigation");
let tabContentList = [...document.querySelectorAll('.tab__content')];

tabNavigationElement.addEventListener('click', e => {
        let menu = e.target.closest(".tab");
        if(menu) {
            let index = tabNavigationList.indexOf(e.target);
            if(!(tabNavigationList[index].querySelector(".tab_active"))){
                tabNavigationList.forEach(elTab => elTab.classList.remove("tab_active"));
                tabContentList.forEach(tabContent => tabContent.classList.remove("tab__content_active"));
                tabNavigationList[index].classList.add("tab_active");
                tabContentList[index].classList.add("tab__content_active");
            }
        }
    });




