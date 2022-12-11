const taskInput = document.querySelector(".tasks__input");
const taskList = document.querySelector( '.tasks__list' );
const btnAdd = document.querySelector(".tasks__add");
let listBtnRemove = [];


    taskInput.addEventListener("keyup",  event => {
        if(event.key === "Enter") {
            let task = document.getElementById("task__input").value;
            if (task != "") {
                taskList.innerHTML += `
                    <div class="task">
                        <div class="task__title last__title"></div>
                        <a href="#" class="task__remove">&times;</a>
                        </div>`;

                let lastTitle = document.querySelector(".last__title");

                lastTitle.innerHTML = task;

                lastTitle.classList.remove("last__title");
                document.getElementById("task__input").value = "";
               let lastBtn = document.querySelector(".last__btn_remove");
                listBtnRemove = document.querySelectorAll(".task__remove");
            }
        }
        listBtnRemove.forEach(e =>{
            e.addEventListener("click", el => {
                let removeElement = el.target.closest(".task");
                removeElement.remove();
                listBtnRemove = document.querySelectorAll(".task__remove");
                localStorage.removeItem(`${removeElement.dataset.id}`);
            })
        });
    });







