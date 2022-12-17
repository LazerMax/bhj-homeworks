const taskList = document.querySelector( '.tasks__list' );
const btnAdd = document.querySelector(".tasks__add");




    window.onload = () => {
    if (localStorage.length != 0) {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let template = `${localStorage.getItem(key)}`;
            taskList.insertAdjacentHTML('afterbegin', template)
        }
    }

        let btnsRemove = document.querySelectorAll(".task__remove");

        if(btnsRemove){
            btnsRemove.forEach(e => {
                    e.addEventListener("click", el => {
                        let removeElement = el.target.closest(".task");
                        removeElement.remove();
                        console.log(removeElement.dataset.id);
                        localStorage.removeItem(`${removeElement.dataset.id}`)
                    });
                });
        }

    }


btnAdd.addEventListener("click",  el => {

            let task = document.getElementById("task__input").value.trim();

            if (task != "") {

                let template = `<div data-id="${++localStorage.length}" class="task">
                <div class="task__title">${task}</div>
                <a href="#" class="task__remove">&times;</a></div>`;

                taskList.insertAdjacentHTML("afterEnd", template);
                localStorage.setItem(`${++localStorage.length}`, template);

               document.getElementById("task__input").value = "";
            }
            let btnRemove = document.querySelector(".task__remove");
            btnRemove.addEventListener("click", el => {
            let removeElement = el.target.closest(".task");
            removeElement.remove();
    });
});







