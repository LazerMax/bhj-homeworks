const hasToolText = [...document.querySelectorAll(".has-tooltip")];

hasToolText.forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault();
        let workElement = e.target.nextElementSibling;
        if(!workElement){
            workElement = e.target;
        }
        if(!(workElement.classList.contains("tooltip"))){
           let oldActiveElement = document.querySelector(".tooltip_active");
            if(oldActiveElement){
              oldActiveElement.classList.remove("tooltip_active");
          }
          e.target.insertAdjacentHTML("afterEnd", "<div class='tooltip tooltip_active'></div>");
            workElement = document.querySelector(".tooltip_active");
            workElement.textContent = e.target.getAttribute("title");
            const hasToolRect = e.target.getBoundingClientRect();
            let x = hasToolRect.left;
            let y = hasToolRect .top + 20;
            workElement.style.left = x + "px";
            workElement.style.top = y + "px";
        }
        else if(workElement.classList.contains("tooltip_active")){
                workElement.classList.remove("tooltip_active");
        }
      else{
          let oldActiveElement = document.querySelector(".tooltip_active");
          if(oldActiveElement){
              oldActiveElement.classList.remove("tooltip_active");
          }
          workElement.classList.add("tooltip_active");
        }
    });
})
