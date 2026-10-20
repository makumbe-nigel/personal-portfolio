const nav = document.querySelector(".nav");
const burger = document.querySelector(".hamburger");

function setMenu(open) {
  nav.classList.toggle("open", open);
  burger.classList.toggle("active", open);
  burger.setAttribute("aria-expanded", open);
}

burger.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
