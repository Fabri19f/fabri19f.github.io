let tictac = new Array(Array(3),Array(3),Array(3));
let player = "×";
let scoreO = 0;
let scoreX = 0;

document.getElementById("box-1").addEventListener("click",(e)=>{executeShift(0, 0, e)});
document.getElementById("box-2").addEventListener("click",(e)=>{executeShift(0, 1, e)});
document.getElementById("box-3").addEventListener("click",(e)=>{executeShift(0, 2, e)});
document.getElementById("box-4").addEventListener("click",(e)=>{executeShift(1, 0, e)});
document.getElementById("box-5").addEventListener("click",(e)=>{executeShift(1, 1, e)});
document.getElementById("box-6").addEventListener("click",(e)=>{executeShift(1, 2, e)});
document.getElementById("box-7").addEventListener("click",(e)=>{executeShift(2, 0, e)});
document.getElementById("box-8").addEventListener("click",(e)=>{executeShift(2, 1, e)});
document.getElementById("box-9").addEventListener("click",(e)=>{executeShift(2, 2, e)});

document.getElementById("reset").addEventListener("click", ()=>{
    reset();
});

function reset(){
    let cell = document.querySelectorAll(".container__items");
    cell.forEach(element => {
        element.firstElementChild.classList.remove("container__effect--active");
        element.firstElementChild.innerHTML = "";
        element.removeAttribute("style");
    });
    tictac = new Array(Array(3),Array(3),Array(3));
}



function executeShift(row, col, e){
    if(e.target.textContent == ""){
        e.target.firstElementChild.innerHTML = player;
        changeShift(e);
        tictac[row][col] = player;
        checkWinner();
    }
}

function changeShift(e){
    let icon = document.getElementById("turn-icon");
    let fx = e.target.firstElementChild;
    fx.classList.add("container__effect--active");
    if(player == "×"){
        player = "o";
        icon.style.color = "#9090fa";
    }
    else{
        player = "×";
        e.target.style.color = "#9090fa";
        icon.style.color = "#fff";
    }
    icon.innerHTML = player;
}

function checkWinner(){
    if(tictac[0][0] == player && tictac[0][1] == player && tictac[0][2] == player || 
       tictac[1][0] == player && tictac[1][1] == player && tictac[1][2] == player ||
       tictac[2][0] == player && tictac[2][1] == player && tictac[2][2] == player ||

       tictac[0][0] == player && tictac[1][0] == player && tictac[2][0] == player ||
       tictac[0][1] == player && tictac[1][1] == player && tictac[2][1] == player ||
       tictac[0][2] == player && tictac[1][2] == player && tictac[2][2] == player ||

       tictac[0][0] == player && tictac[1][1] == player && tictac[2][2] == player ||
       tictac[2][0] == player && tictac[1][1] == player && tictac[0][2] == player
    ){
       if(player == "o"){
            scoreX += 1;
            document.getElementById("score-×").innerHTML = scoreX;
            reset();
       }
       else{
            scoreO += 1;
            document.getElementById("score-o").innerHTML = scoreO;
            reset();
       }
    }
}