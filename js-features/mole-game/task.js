mole = document.getElementsByClassName("hole_has-mole");
holes = document.getElementsByClassName("hole");

let dead = 0;
let lost = 0;

let Dead = document.getElementById("dead");
let Lost = document.getElementById("lost");

for(let hole in holes){

    hole.onclick = function () {
        if(hole.classList.contains( 'hole_has-mole' )){
            ++dead;
            Dead.innerHTML = dead.toString();
        }  else{
            ++lost;
            Lost.innerHTML = lost.toString();
        }
    };
}

if(dead > lost){
    alert("Победа!");
} else{
    alert("Поражение!")
}