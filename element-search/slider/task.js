let slider = [...document.querySelectorAll('.slider__item')];
let index = slider.indexOf(document.querySelector(".slider__item_active"));
let nextArrow = document.querySelector(".slider__arrow_next");
let prevArrow = document.querySelector(".slider__arrow_prev");
let sliderDots = [...document.querySelectorAll('.slider__dot')];

nextArrow.onclick = f => {
    slider[index].classList.remove('slider__item_active');
    sliderDots[index].classList.remove('slider__dot_active');

    if (index === slider.length-1){
        index = 0;
    } else{
        ++index;
    }

    slider[index].classList.add('slider__item_active');
    sliderDots[index].classList.add('slider__dot_active');
};

prevArrow.onclick = f => {
    slider[index].classList.remove('slider__item_active');
    sliderDots[index].classList.remove('slider__dot_active');

    if (index === 0){
        index = slider.length-1;
    } else{
        --index;
    }
    slider[index].classList.add('slider__item_active');
    sliderDots[index].classList.add('slider__dot_active');
};

document.addEventListener('click', e => {
    if(e.target.closest(".slider__dots")){

        slider[index].classList.remove('slider__item_active');
        sliderDots[index].classList.remove('slider__dot_active');

        index = sliderDots.indexOf(e.target);

        slider[index].classList.add('slider__item_active');
        sliderDots[index].classList.add('slider__dot_active');
    }
});


