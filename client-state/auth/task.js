const xhr = new XMLHttpRequest();
const divSignin = document.querySelector(".signin")
const form = document.forms.namedItem("authorization");

form.addEventListener("submit", e => {
    e.preventDefault();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    const formData = new FormData(form);
    xhr.send(formData);
    xhr.addEventListener("load", () => {
        if (xhr.readyState === xhr.DONE) {
            let myObj = JSON.parse(xhr.responseText);
            if (myObj.success === true) {
                $('#signin__form').remove();
                let template = `<div class="success_message">Добро пожаловать, пользователь #${myObj.user_id}</div><br><button class="btn btn_exit">выход</button>`;
                divSignin.insertAdjacentHTML("afterEnd", template);
                document.querySelector(".btn_exit").addEventListener("click", f => {location.reload()});
            } else{
                alert("Неверный логин/пароль");
                location.reload();
            }
        }
    });
});





