"use strict";

const burgerBtn = document.querySelector(".nav__button-open");
const sideBar = document.querySelector(".sidebar");

burgerBtn.addEventListener("click", () => {
  sideBar.classList.toggle("sidebar--opened");
});
