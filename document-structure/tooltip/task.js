const hasToolText = [...document.querySelectorAll(".has-tooltip")];

hasToolText.forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault();
        let workElement = e.target.querySelector(".tooltip");
        if(!(workElement)){
            e.target.insertAdjacentHTML("beforeEnd", "<div class='tooltip'></div>");
            workElement = e.target.querySelector(".tooltip");
        }
        if (workElement.textContent === "") {
            workElement.textContent = e.target.getAttribute("title");
        }
        const toolActiveText = [...document.querySelectorAll(".tooltip_active")];
        toolActiveText.forEach(elem => elem.classList.remove("tooltip_active"));
        workElement.classList.add("tooltip_active");
    });
})
