let slider = [...document.querySelectorAll('.slider__item')];
let index = slider.indexOf(document.querySelector(".slider__item_active"));
let nextArrow = document.querySelector(".slider__arrow_next");
let prevArrow = document.querySelector(".slider__arrow_prev");
let sliderDots = [...document.querySelectorAll('.slider__dot')];

function imgInstall (){
    slider.forEach(e => e.classList.remove("slider__item_active"));
    sliderDots.forEach(e => e.classList.remove("slider__dot_active"));
    slider[index].classList.add('slider__item_active');
    sliderDots[index].classList.add('slider__dot_active');
}

nextArrow.onclick = f => {
    (index === slider.length-1 ? index = 0 : ++index);
    imgInstall();
};

prevArrow.onclick = f => {
    (index === 0 ? index = slider.length-1 : --index);
    imgInstall();
};

document.addEventListener('click', e => {
    if(e.target.closest(".slider__dots")){
        index = sliderDots.indexOf(e.target);
        imgInstall();
    }
});


