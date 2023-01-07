const textArea = document.getElementById("editor");
const btnClear = document.querySelector(".btn_clear");



function  saveText(){
    localStorage.setItem("itemsArray", textArea.value);
}

window.onload = () => {
        textArea.textContent = localStorage.getItem("itemsArray");
}

textArea.addEventListener("keyup", event => {saveText()});

btnClear.addEventListener("click", () => {
    textArea.value = "";
    saveText();
});


