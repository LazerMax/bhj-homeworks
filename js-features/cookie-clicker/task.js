let clicker = document.getElementById("clicker__counter"),
    cooke = document.getElementById("cookie"),
    speed = document.getElementById("clicker__speed");
    counter = 0;

let lastClicked = 0;

cooke.onclick = function (){
    let timeNow = (new Date()).getTime();
    let elapsed = timeNow-lastClicked;
    console.log(elapsed);
    speed.innerHTML = (1000/elapsed).toFixed(2);
    ++counter;
    clicker.innerHTML = counter.toString();
    if(cooke.width === 200){
        cooke.width = 150;
    } else{
        cooke.width = 200;
    }
    lastClicked = timeNow;
}