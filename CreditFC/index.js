let menuBtn = document.querySelector(".bx-menu");
let closeBtn = document.querySelector(".bx-x");
let menu = document.querySelector("ul.menu");

menuBtn.addEventListener("click", showMenu);
closeBtn.addEventListener("click", closeMenu);

function showMenu() {
  menu.classList.add("show");
}

function closeMenu() {
  menu.classList.remove("show");
}