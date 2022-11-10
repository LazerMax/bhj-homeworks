let hours = 0,
    minutes = 1,
    seconds = 20,
    target = new Date(),
    timerDiv = document.getElementById("timer"),
    link = document.getElementById("link"),
    handler;

function init() {
 target.setHours(hours);
 target.setMinutes(minutes);
 target.setSeconds(seconds);
 target.setMilliseconds(0);
 timerDiv.innerHTML = target.toTimeString().split(" ")[0];
}

function updateTimer() {
 let time = target.getTime();
 target.setTime(time - 1000);
 timerDiv.innerHTML = target.toTimeString().split(" ")[0];
 if (
     target.getHours() === 0 &&
     target.getMinutes() === 0 &&
     target.getSeconds() === 0
 ) {
  clearInterval(handler);
  link.click();
  alert("Вы победили в конкурсе!");
 }
}

handler = setInterval(updateTimer, 100);

init();