let button = document.getElementById("nav-toggle");
let menu = document.getElementById("navbarNav");

button.addEventListener("click", ()=>{
    menu.classList.toggle("nav-expanded");
});