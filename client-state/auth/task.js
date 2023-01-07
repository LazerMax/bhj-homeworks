const xhr = new XMLHttpRequest();
const divSignin = document.querySelector(".signin")
const form = document.forms.namedItem("authorization");
let userList = [];
let i=0;

form.addEventListener("submit", e => {
    e.preventDefault();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    const formData = new FormData(form);
    xhr.responseType = 'json';
    xhr.send(formData);
    xhr.addEventListener("load", () => {
            let myObj = xhr.response;
            if (myObj.success === true) {
                document.getElementById("signin__form").reset();
                divSignin.classList.remove("signin_active");
                if(!(userList.find(e => e === myObj.user_id))){
                    userList.push(myObj.user_id);
                    let template = `<div class="success_block"><h2>Вход</h2><div class="success_message">Добро пожаловать, пользователь #${myObj.user_id}</div><br><button class="btn btn_exit">выход</button></div>`;
                    divSignin.insertAdjacentHTML("afterEnd", template);
                }
                document.querySelector(".btn_exit").addEventListener("click", f => {
                    $('.success_block').remove();
                    divSignin.classList.add("signin_active");
                });
            } else{
                alert("Неверный логин/пароль");
                document.getElementById("signin__form").reset();
            }
    });
});





