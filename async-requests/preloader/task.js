const xhr = new XMLHttpRequest();
const items = document.querySelector("#items");

window.onload = () => {

    if (localStorage.getItem("itemsArray")) {
        let myObj = JSON.parse(localStorage.getItem("itemsArray"));
        for (key in myObj) {
            let template = `<div class="item oldElement"><div class="item__code">${key}</div>
                <div class="item__value">${myObj[key]}</div>
               <div class="item__currency">руб.</div></div>`;
            items.insertAdjacentHTML("afterEnd", template);
        }
        document.querySelector(".loader_active").classList.remove("loader_active");
    }
}

xhr.addEventListener("load", () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        let myObj = JSON.parse(xhr.responseText).response.Valute;
        let newObj = {};

        for (key in myObj) {
            let template = `<div class="item"><div class="item__code">${key}</div>
                <div class="item__value">${myObj[key].Value}</div>
               <div class="item__currency">руб.</div></div>`;
            items.insertAdjacentHTML("afterEnd", template);
            newObj[key] = myObj[key].Value;
        }
        if (!(localStorage.getItem("itemsArray"))){
            document.querySelector(".loader_active").classList.remove("loader_active");
        } else{
            $('.oldElement').remove();
        }
        localStorage.setItem("itemsArray", JSON.stringify(newObj));
    }
    });

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.send();

