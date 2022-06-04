let cells = document.querySelectorAll(".table-cell");
let winnerMessage = document.querySelector(".winner-message");
let winnerText = document.getElementById("winner-text");
let player = "x";
let winStates = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];
cells.forEach(cell => {
    cell.addEventListener("click", ()=>{
        if(!cell.classList.contains("x") && !cell.classList.contains("o")){
            cell.classList.add(player);
            checkWinner();
            changeTurn();
        }
    });
});

function changeTurn(){
    player == "x" ? player = "o" : player = "x";
}

function checkWinner(){
    for(let i = 0; i < winStates.length; i++){
        if(cells[winStates[i][0]].classList.contains(player) && cells[winStates[i][1]].classList.contains(player) && cells[winStates[i][2]].classList.contains(player)){
            cells[winStates[i][0]].classList.add("cell-winner");
            cells[winStates[i][1]].classList.add("cell-winner");
            cells[winStates[i][2]].classList.add("cell-winner");
            winnerMessage.classList.add("winner-message-active");
            if(player ==  "x"){
                winnerText.innerHTML = "×";
                winnerText.style.color = "#fff";
            } 
            else{
                winnerText.innerHTML = "o";
                winnerText.style.color = "#5e5ef5";
            }
        }  
    }
}

winnerMessage.addEventListener("click", ()=>{
    winnerMessage.classList.remove("winner-message-active");
    cells.forEach(cell =>{
        cell.classList.remove("x");
        cell.classList.remove("o");
        cell.classList.remove("cell-winner");
    });
});