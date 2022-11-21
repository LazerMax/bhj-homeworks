let rotator = [...document.querySelectorAll(".rotator__case")];
let index = rotator.indexOf(document.querySelector(".rotator__case_active"));
let delay = parseInt(rotator[index].getAttribute("data-speed"));

let interval;

function showCase (){
        rotator[index].classList.remove("rotator__case_active");
        (index === rotator.length-1 ? index = 0 : ++index);
        delay = parseInt(rotator[index].getAttribute("data-speed"));
        console.log(delay);
        rotator[index].style.color = rotator[index].getAttribute("data-color");
        rotator[index].classList.add("rotator__case_active");
        clearInterval(interval);
        interval = setInterval(showCase, delay);

}

showCase ();

