blocks = [...document.querySelectorAll(".reveal")];

blocks.forEach(e => {
    document.addEventListener("scroll", f => {
    const {top, bottom} = e.getBoundingClientRect();

    if(bottom < 0){
        return false;
    }

    if(top > window.innerHeight){
        return false;
    }

    e.classList.add("reveal_active");

    })
})
