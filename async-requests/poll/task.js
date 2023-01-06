const xhr = new XMLHttpRequest();
const title = document.querySelector("#poll__title");
const pollAnswers = document.querySelector("#poll__answers");



xhr.addEventListener("load", () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        let myObj = JSON.parse(xhr.responseText).data;
        let id =JSON.parse(xhr.responseText).id;
        title.textContent = myObj.title;
        let answers = myObj.answers;
        answers.forEach(e => {
            let template = `<button class="poll__answer">${e}</button>`;
            pollAnswers.insertAdjacentHTML("afterEnd", template);
        });

    let btn_answers = [...document.querySelectorAll(".poll__answer")];
   for(let i = 0; i < btn_answers.length; ++i){
       btn_answers[i].addEventListener("click", el => {
           alert("Спасибо, ваш голос засчитан!");
           xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
           xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
           xhr.send('vote='+id+'&answer='+i);
           xhr.addEventListener("load", () => {
            console.log(xhr.responseText);
            $('.poll__answer').remove();
            let stat = JSON.parse(xhr.responseText).stat;
            stat.forEach(el => {
                 let template = `<div class="answer">${el.answer}: ${el.votes}%</div>`;
             pollAnswers.insertAdjacentHTML("afterEnd", template);
             
            })     
           });
       });
   }  
}
});

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();



