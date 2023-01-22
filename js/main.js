const NavBarOpeneBtn = document.querySelector(".js-navbar-open-btn");
const NavBarCloseBtn = document.querySelector(".js-navbar-close-btn");
const NavBar = document.querySelector(".js-navbar");


NavBarOpeneBtn.addEventListener("click", () => {
  NavBar.classList.add("active")
})
NavBarCloseBtn.addEventListener("click", () => {
  NavBar.classList.remove("active")
})

console.log(NavBar);