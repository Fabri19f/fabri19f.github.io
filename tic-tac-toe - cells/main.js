let cells = document.querySelectorAll(".table-cell");
let player = "x";
cells.forEach(cell => {
    cell.addEventListener("click", ()=>{
        if(!cell.classList.contains("x") && !cell.classList.contains("o")){
            cell.classList.add(player);
            changeTurn();
        }
    });
});

function changeTurn(){
    player == "x" ? player = "o" : player = "x";
}