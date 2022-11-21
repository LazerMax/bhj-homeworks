let bookFontSizeControl = [...document.querySelectorAll('.font-size')];
let bookColorControl = [...document.querySelectorAll('.color')];
let book = document.querySelector('.book');
let fontSizeBlock = document.querySelector(".book__control_font-size");
let colorBlock = document.querySelector(".book__control_font-color");
let backgroundBlock = document.querySelector(".book__control_font-background");
let index;

function changeSizeText(){
    if (index === 0){
        book.classList.remove("book_fs-big");
        book.classList.add("book_fs-small");
    }
    if (index === 1){
        book.classList.remove("book_fs-big");
        book.classList.remove("book_fs-small");
    }
    if(index === 2){
        book.classList.add("book_fs-big");
        book.classList.remove("book_fs-small");
    }
}

function changeColor(determinant){
    if (index === 0){
        book.classList.remove("book_"+determinant+"-gray");
        book.classList.remove("book_"+determinant+"-whitesmoke");
        book.classList.add("book_"+determinant+"-black");
    }
    if (index === 1){
        book.classList.remove("book_"+determinant+"r-black");
        book.classList.remove("book_"+determinant+"-whitesmoke");
        book.classList.add("book_"+determinant+"-gray");
    }
    if(index === 2){
        book.classList.remove("book_"+determinant+"-black");
        book.classList.remove("book_"+determinant+"-gray");
        book.classList.add("book_"+determinant+"-whitesmoke");
    }
}


fontSizeBlock.addEventListener('click', e => {
    let menu = e.target.closest(".font-size");
    if(menu){
            e.preventDefault();
            if (!(menu.querySelector(".font-size_active"))) {
                index = bookFontSizeControl.indexOf(menu);
                bookFontSizeControl.forEach(elMenu => elMenu.classList.remove("font-size_active"));
                menu.classList.add("font-size_active");
                changeSizeText();
            }
        }});

colorBlock.addEventListener('click', e => {
    let menu = e.target.closest(".color");
    if(menu){
        e.preventDefault();
        if (!(menu.querySelector(".color_active"))) {
            index = bookColorControl.indexOf(menu);
            bookColorControl.forEach(elMenu => elMenu.classList.remove("color_active"));
            menu.classList.add("color_active");
            changeColor("color");
        }
    }});

backgroundBlock.addEventListener('click', e => {
    let menu = e.target.closest(".color");
    if(menu){
        e.preventDefault();
        if (!(menu.querySelector(".color_active"))) {
            index = bookColorControl.indexOf(menu);
            bookColorControl.forEach(elMenu => elMenu.classList.remove("color_active"));
            menu.classList.add("color_active");
            changeColor("color");
        }
    }});