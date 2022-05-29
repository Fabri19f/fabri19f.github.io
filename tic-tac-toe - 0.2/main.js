let cells = document.querySelectorAll(".table__cell");
let items = document.querySelectorAll(".table__item");
let player = "table__item--x";
let winStates = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

cells.forEach(cell => {
    cell.addEventListener("click", ()=>{
        if(!cell.firstChild.classList.contains("table__item--x") || cell.firstChild.classList.contains("table__item--o")){
            cell.firstChild.classList.add(player);
            checkWinner();
            changeTurn();
        }
    });
});

function checkWinner(){
    for(let i = 0; i < winStates.length; i++){
        if(items[winStates[i][0]].classList.contains(player) && items[winStates[i][1]].classList.contains(player) && items[winStates[i][2]].classList.contains(player)){
            cells[winStates[i][0]].classList.add("table__cell--winner");
            cells[winStates[i][1]].classList.add("table__cell--winner");
            cells[winStates[i][2]].classList.add("table__cell--winner");
        } 
    }
}

function changeTurn(){
    player == "table__item--x" ? player = "table__item--o" : player = "table__item--x";
}

