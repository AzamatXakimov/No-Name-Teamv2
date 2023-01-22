const NavBarOpeneBtn = document.querySelector(".js-navbar-open-btn");
const NavBarCloseBtn = document.querySelector(".js-navbar-close-btn");
const NavBar = document.querySelector(".js-navbar");


NavBarOpeneBtn.addEventListener("click", () => {
  NavBar.classList.add("active")
})
NavBarCloseBtn.addEventListener("click", () => {
  NavBar.classList.remove("active")
})

const LoginModal = document.querySelector(".js-login-modal");
const LoginModalOpenBtn = document.querySelector(".js-login-modal-open");
const LoginModalCloseBtn = document.querySelector(".js-modal-close-btn")

console.log(LoginModal);
console.log(LoginModalOpenBtn);
console.log(LoginModalCloseBtn);

LoginModalOpenBtn.addEventListener("click", () => {
  LoginModal.classList.add("active")
})

LoginModalCloseBtn.addEventListener("click", () => {
  LoginModal.classList.remove("active")
})