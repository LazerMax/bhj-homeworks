const taskList = document.querySelector( '.tasks__list' );
const btnAdd = document.querySelector(".tasks__add");



window.onload = () => {
    if (localStorage.getItem("tasksArray")) {
        let masString = JSON.parse(localStorage.getItem("tasksArray"));
        masString.forEach(e => {

            let template = `<div data-id="${++localStorage.length}" class="task">
                <div class="task__title">${e}</div>
                <a href="#" class="task__remove">&times;</a></div>`;

            taskList.insertAdjacentHTML("afterEnd", template);
        })
    }
}


btnAdd.addEventListener("click",  el => {

    let task = document.getElementById("task__input").value.trim();

    if (task != "") {
         let template = `<div data-id="${++localStorage.length}" class="task">
                <div class="task__title">${task}</div>
                <a href="#" class="task__remove">&times;</a></div>`;
         taskList.insertAdjacentHTML("afterEnd", template);

        let tasks = document.querySelectorAll(".task__title");
        let masString = [];
        tasks.forEach(elem => {masString.push(elem.textContent)});

         localStorage.setItem("tasksArray", JSON.stringify(masString));

         document.getElementById("task__input").value = "";
    }

    let btnRemove = document.querySelector(".task__remove");

        if (btnRemove){
        btnRemove.addEventListener("click", el => {
            let removeElement = el.target.closest(".task");
            removeElement.remove();

            let tasks = document.querySelectorAll(".task__title");
            let masString = [];
            tasks.forEach(elem => {masString.push(elem.textContent)});
            localStorage.setItem("tasksArray", JSON.stringify(masString));

        });
    }
});





