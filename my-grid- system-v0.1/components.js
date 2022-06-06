let navButton = document.getElementById("navButton");
let navMenu = document.getElementById("navMenu");
let body = document.querySelector("body");

navButton.addEventListener("click", ()=>{
    navMenu.classList.toggle("navbar-menu-show");
    body.classList.toggle("lock-scroll-body");
});