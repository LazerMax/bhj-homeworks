document.getElementById("modal_main").classList.add("modal_active");

let btnsClose = [...document.querySelectorAll('.modal__close')];

btnsClose.forEach(e => {
 e.onclick = f => {
  let modalWindows = [...document.querySelectorAll('.modal')];
  modalWindows.forEach(modalWindow => {
   modalWindow.classList.remove("modal_active");
  })
 }
})

let btnShow = document.querySelector(".show-success");

btnShow.onclick = f => {
 document.getElementById("modal_success").classList.add("modal_active");
 document.getElementById("modal_main").classList.remove("modal_active");
}
