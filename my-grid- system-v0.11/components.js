let navButton = document.getElementById("navbar-toggler");
let body = document.querySelector("body");

let navOffcanvas = document.querySelector(".offcanvas");

navButton.addEventListener("click", ()=>{
    navOffcanvas.classList.toggle("navbar-show");
    body.classList.toggle("lock-scroll-body");
});