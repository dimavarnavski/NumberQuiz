let checkButton = document.getElementById("checkButton");
let verno = document.getElementById("verno");
let newgame = document.getElementById("newgame");
let cifra = document.getElementById("cifra");
let secret = getRandom(1,50);
let lives=5;
let livesTitle = document.getElementById("livesTitle");
let tip = document.getElementById("tip");
livesTitle.innerHTML="&#128155;".repeat(lives);
cifra.select();

function getRandom(min,max) {
 return Math.floor(Math.random()*(max-min+1)+min);
}

checkButton.onclick = function (event) {
    event.preventDefault();
    cifra.select();
    // verno.innerHTML="Ответ: Верно";
    console.log(cifra.value);
    if (cifra.value == secret) {
        console.log("verno");
        verno.innerHTML="Ответ:верно";
        checkButton.disabled=true;
        livesTitle.innerHTML="&#11088;".repeat(lives);
    } else {
        console.log("neverno");
        verno.innerHTML="Ответ:неверно";
        lives=lives-1;
        // livesTitle.innerHTML="жизни: "+ lives;
        livesTitle.innerHTML="&#128155;".repeat(lives);
        if (lives==0) {
         checkButton.disabled=true;
         livesTitle.innerHTML="&#128128;".repeat(3);
         verno.innerHTML="Ответ:"+secret;
        }
    }
    if (cifra.value>secret){
        tip.innerHTML="число меньше вашего";
     } 
     if (cifra.value<secret){
        tip.innerHTML="число больше вашего";
     }
}
newgame.onclick = function (event) {
    event.preventDefault();
    lives=5;
    livesTitle.innerHTML="жизни: "+ lives;
    checkButton.disabled=false;
    livesTitle.innerHTML="&#128155;".repeat(lives);
    secret = getRandom(1,50);
    verno.innerHTML="Ответ";
    cifra.select();
}
