let homePoints = 0;
let guestPoints = 0;

let homeEl = document.getElementById("panel-home")
let guestEl = document.getElementById("panel-guest")


function homePlus1(){
    homePoints += 1;
    homeEl.textContent = homePoints;
}

function homePlus2(){
    homePoints += 2;
    homeEl.textContent = homePoints;
}

function homePlus3(){
    homePoints += 3;
    homeEl.textContent = homePoints;
}

function guestPlus1(){
    guestPoints += 1;
    guestEl.textContent = guestPoints;
}
function guestPlus2(){
    guestPoints += 2;
    guestEl.textContent = guestPoints;
}
function guestPlus3(){
    guestPoints += 3;
    guestEl.textContent = guestPoints;
}