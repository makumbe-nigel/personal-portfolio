const navBar = document.querySelector(".nav-links");
const harmburger = document.querySelector(".hamburger");

harmburger.addEventListener("click",()=>{
    navBar.classList.toggle("active");
    harmburger.classList.toggle("active");
})
document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", ()=>{
    navBar.classList.remove("active");
    harmburger.classList.remove("active");
}))