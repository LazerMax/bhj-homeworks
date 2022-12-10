const checkList = [...document.querySelectorAll(".interest__check")];

checkList.forEach(flag => {
    flag.addEventListener("click", e => {
        let mainElement = e.target.closest(".interests_active");
        let middleElement = e.target.closest(".interest").querySelector(".interests_active");
        console.log(middleElement);
         if(middleElement){
            mainElement = e.target.closest(".interest").querySelector(".interests_active");
            let flagList = [...mainElement.querySelectorAll(".interest__check")];
           flagList.forEach(el => {el.click()});
         }
    });
})

