let navButton = document.getElementById("navButton");
let navMenu = document.getElementById("navMenu");

navButton.addEventListener("click", ()=>{
    navMenu.classList.toggle("navbar-menu-show");
});