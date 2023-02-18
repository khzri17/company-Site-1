// preLoader
window.addEventListener("load", function () {
  const preLoader = document.querySelector("#preloader");
  preLoader.classList += " hidden";
});
// End preloader
// login form
let loginFormBtn = document.querySelector("#login-form");
let signUp = document.querySelector(".signUp");
let login = document.querySelector(".login");
let signUpFormBtn = document.querySelector("#signUp");

signUpFormBtn.addEventListener("click", function () {
  signUp.classList.add("active");
  login.classList.add("deactive");
  login.classList.remove("active");
  signUp.classList.remove("deactive");
});
loginFormBtn.addEventListener("click", function () {
  signUp.classList.remove("active");
  login.classList.remove("deactive");
  login.classList.add("active");
  signUp.classList.add("deactive");
});
// End Login form



