let btnNavbar = document.getElementById("navbar-btn");
let componentNavbarMenu = document.getElementById("navbar-menu");
btnNavbar.addEventListener("click", ()=>{
    componentNavbarMenu.classList.toggle("navbar-menu-show");
});
document.addEventListener("click", (e)=>{
    if(e.target != componentNavbarMenu && e.target != btnNavbar){
        componentNavbarMenu.classList.remove("navbar-menu-show");
    }
});